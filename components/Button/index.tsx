import React from 'react'
import { ButtonStyled } from './styled'
import styled, { PaletteBase, PaletteExtra } from 'styled-components'

export type Props = {
    variant: 'text' | 'outlined' | 'contained'
    color: keyof PaletteExtra
    size: 'small' | 'medium' | 'large'
    colorBase: keyof PaletteBase
    fullWidth?: boolean
    round?: boolean
    active?: boolean
    visibility?: boolean
    spinned?: boolean
    icon?: any | null
    children?: any
    roundCorner?: boolean
}

const defaultProps = {
    variant: 'contained',
    color: 'default',
    size: 'medium',
    colorBase: 'extraOn',
}

const Button = (props: Props) => {
    return (
        <ButtonStyled {...props} >
            <ChildrenWrapper>{props.children}</ChildrenWrapper>
        </ButtonStyled>
    )
}

Button.defaultProps = defaultProps

export default Button

const ChildrenWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`