import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'

import Auth from './Auth'

const NavPanel = () => {
    return (
        <Wrapper>
            <Link href="/">
                <a>Главная</a>
            </Link>
            <Link href="/conditions">
                <a>Условия</a>
            </Link>
            <Link href="/project-list">
                <a>Проекты</a>
            </Link>
            <Auth />
        </Wrapper>
    )
}

export default NavPanel

const activeLink = css`
    :hover::after {
        content: '';
        display: block;
        margin-bottom: -2px;
        border-bottom: 2px solid white;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    & > a {
        text-decoration: none;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
        color: white;
        margin-right: 18px;

        :last-of-type {
            margin-right: 0px;
        }

        ${activeLink}
    }
`
