import Head from 'next/head'
import { ReactNode } from 'react';
import styled from 'styled-components'
import NavPanel from '../ui/NavPanel'
import Logo from '../ui/Logo'

type Props = {
    children?: ReactNode
}

export default (props: Props) => (
    <Background>
        <Head>
            <title>MLP</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto+Condensed:400,700|Roboto+Mono:300,400,700&amp;subset=cyrillic" rel="stylesheet"></link>
        </Head>
        <BodyBox>
            <MainContent>
                <Header>
                    <Logo />
                    <NavPanel />
                </Header>
                {props.children}
            </MainContent>
        </BodyBox>
    </Background>
)

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #48BBFF;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 18px;
    margin-right: 35px;
`

const BodyBox = styled.div`
    max-width: 1120px;
    margin: 0px auto;
`

const MainContent = styled.section`
    position: relative;
    background-color: #9948FF;
    padding: 1px;
    margin-top: 60px;
    height: 875px;
    
    :after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        border-top: 80px solid transparent;
        border-right: 1120px solid #48BBFF;
    }
`