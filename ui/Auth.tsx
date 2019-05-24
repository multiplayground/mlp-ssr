import Router from 'next/router'
import React, { useContext } from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'

import Button from '../components/Button'
import Modal from '../components/Modal'
import { Auth as AuthContext } from '../pages/_app'
import SignIn from './SigIn'
import SignUp from './SigUp'

type IAuthModals = 'login' | 'registrate' | ''

const Auth = () => {
    const [authModal, setAuthModal] = useState<IAuthModals>('')
    const user = useContext(AuthContext)

    const onClickSignIn = () => {
        setAuthModal('login')
    }
    const onClickSignOut = () => {
        var date = new Date(0)
        document.cookie = 'utoken=; path=/; expires=' + date.toUTCString()
        location.replace('/')
    }
    const onClickSignUp = () => {
        setAuthModal('registrate')
    }
    const onClickProfile = () => {
        Router.push({ pathname: `/profile` })
    }
    return (
        <>
            <Wrapper>
                <Separator />
                {!user && (
                    <>
                        <a onClick={onClickSignIn}>Войти</a>
                        <Button
                            onClick={onClickSignUp}
                            color="white"
                            size="small"
                            roundCorner
                        >
                            Регистрация
                        </Button>
                    </>
                )}
                {!!user && (
                    <>
                        <a onClick={onClickSignOut}>Выйти</a>
                        <Button
                            onClick={onClickProfile}
                            color="white"
                            size="small"
                            roundCorner
                        >
                            Профиль
                        </Button>
                    </>
                )}
            </Wrapper>
            <Modal
                isOpen={authModal === 'login'}
                onClose={() => setAuthModal('')}
                top="220px"
            >
                <SignIn onSubmit={() => setAuthModal('')} />
            </Modal>
            <Modal
                isOpen={authModal === 'registrate'}
                onClose={() => setAuthModal('')}
                top="220px"
            >
                <SignUp />
            </Modal>
        </>
    )
}

export default Auth

const activeLink = css`
    :hover::after {
        content: '';
        display: block;
        margin-bottom: -2px;
        border-bottom: 2px solid white;
    }
`

const Separator = styled.div`
    border: 0.5px solid white;
    margin: 0 20px;
    align-self: stretch;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
        color: white;
        margin-right: 18px;
        cursor: pointer;

        ${activeLink}
    }
`
