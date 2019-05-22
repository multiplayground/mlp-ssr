import React from 'react'
import styled, { css } from 'styled-components'

export type Props = {
    color: keyof PaletteBase
    colorBase: 'paletteOn' | 'palette'
    variant: keyof Typography
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify'
    tag?: string
    children?: any
    fontWeight?: number | string
}

const defaultProps = {
    variant: 'body1',
    color: 'surface',
    align: 'inherit',
    colorBase: 'paletteOn',
}

const Text = (props: Props) => <TextStyled {...props} />

Text.defaultProps = defaultProps

export default Text

const base = css<Props>`
    margin: 0;
    font-family: ${props => props.theme.typography[props.variant].fontFamily};
    font-size: ${props => props.theme.typography[props.variant].fontSize}rem;
    font-weight: ${props =>
        props.fontWeight || props.theme.typography[props.variant].fontWeight};
    letter-spacing: ${props =>
        props.theme.typography[props.variant].letterSpacing}px;
    line-height: ${props => props.theme.typography[props.variant].lineHeight};
    color: ${props => props.theme[props.colorBase][props.color]};
    text-align: ${props => props.align};
`

export const TextStyled = styled.span.attrs<Props>(props => ({
    as: props.tag || props.theme.typography[props.variant].tag,
}))`
    ${base}
`
