import React from 'react'
import { ButtonStyled } from './styled'
import { PaletteBase, PaletteExtra } from 'styled-components'

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
    roundCorner?: boolean
} & React.ComponentPropsWithRef<'button'>

const defaultProps = {
    variant: 'contained',
    color: 'default',
    size: 'medium',
    colorBase: 'extraOn',
}

const Button = (props: Props) => {
    return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

Button.defaultProps = defaultProps

export default Button
