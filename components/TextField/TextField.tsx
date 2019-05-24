import React from 'react'
import styled, { css } from 'styled-components'

export type Props = {
    value?: string | number
    placeholder?: string
    color: keyof PaletteExtra
    variant: keyof PaletteExtra
} & React.ComponentPropsWithRef<'input'>

const defaultProps = {
    value: '',
    color: 'default',
    variant: 'default',
}

export const TextField = (props: Props) => {
    return <Input {...props} />
}

TextField.defaultProps = defaultProps

const focused = css<Props>`
    border: 1px solid ${props => props.theme.extra[props.color]};
    background-color: white;
`

const variant = {
    danger: css<Props>`
        border: 1px solid ${props => props.theme.extra[props.variant]};
        background-color: white;
    `,
}

const base = css`
    font-family: ${props => props.theme.typography.textField.fontFamily};
    font-size: ${props => props.theme.typography.textField.fontSize}rem;
    font-weight: ${props => props.theme.typography.textField.fontWeight};
    letter-spacing: ${props =>
        props.theme.typography.textField.letterSpacing}px;
    line-height: ${props => props.theme.typography.textField.lineHeight};
    border-radius: 4px;
    padding-left: 10px;
    cursor: inherit;
    text-align: inherit;
    background-color: #eff1f3;
    color: #667784;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: 1px solid transparent;

    ::placeholder {
        color: hsla(0, 0%, 67%, 0.7);
        opacity: 1;
    }
    :focus {
        ${focused}
    }
`

const Input = styled.input`
    ${base}
    ${props => variant[props.variant]}
`
