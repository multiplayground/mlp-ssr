import 'isomorphic-unfetch'

import '../theme/bundle'

import jwt from 'jwt-simple'
import { NextComponentType } from 'next'
import nextCookie from 'next-cookies'
import { Container, NextAppContext } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme/base'

type Props = {
    user?: {
        email: string
        exp: number
        login: string
        user_id: number
        username: string
    }
    pageProps: Object
    Component: NextComponentType<any>
}

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export const Auth = React.createContext<Props['user']>(Object())

const MyApp = (props: Props) => {
    const { Component, pageProps, user } = props

    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Auth.Provider value={props.user}>
                    <Component {...pageProps} user={user} />
                </Auth.Provider>
            </ThemeProvider>
        </Container>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }: NextAppContext) => {
    let pageProps = {}

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    const { utoken } = nextCookie(ctx)

    const decoded = utoken && jwt.decode(utoken, utoken.split('.')[2], true)

    return { pageProps, user: decoded }
}

export default MyApp
