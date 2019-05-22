import React, { useState } from 'react'
import styled, { PaletteExtra } from 'styled-components'

export type Props = {
    value: string | number
    placeholder: string
    color: keyof PaletteExtra
}

const defaultProps = {
    value: '',
    color: 'default',
    variant: 'default',
}

export const TextField = (props: Props) => {
    const { placeholder, value } = props
    const [isFocused, setFocused] = useState(false)

    const focusInputHandle = () => {
        setFocused(true)
    }

    const blurInputHandle = () => {
        setFocused(false)
    }

    const changeInputHandle = () => {}

    return (
        <Input
            value={value}
            placeholder={placeholder}
            onChange={changeInputHandle}
            onFocus={focusInputHandle}
            onBlur={blurInputHandle}
        />
    )
}

TextField.defaultProps = defaultProps

const Input = styled.input`
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
    border: none;

    ::placeholder {
        color: hsla(0, 0%, 67%, 0.7);
        opacity: 1;
    }
`
