import styled, { css } from 'styled-components'
import { Props } from './index'

const base = css<Props>`
    border-radius: 0.2rem;
    cursor: pointer;
    min-height: auto;
    text-transform: uppercase;
    border: none;
    outline: none;
    color: ${props => props.theme[props.colorBase][props.color]};
    font-family: ${props => props.theme.typography.button.fontFamily};
    font-size: ${props => props.theme.typography.button.fontSize}rem;
    transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    width: ${props => props.fullWidth && '100%'};
    position: relative;
    display: inline-flex;
    justify-content: center;

    &:disabled,
    &:hover:disabled {
        opacity: 0.75;
        cursor: auto;
        box-shadow: none;
    }
`

const size = {
    small: css<Props>`
        font-size: ${props => props.theme.typography.button.fontSize * 0.85}rem;
        padding: 10px 13px;
    `,
    medium: css<Props>`
        font-size: ${props => props.theme.typography.button.fontSize}rem;
        padding: 12px 17px;
    `,
    large: css<Props>`
        font-size: ${props => props.theme.typography.button.fontSize * 1.2}rem;
        padding: 15px 25px;
    `,
}

const active = {
    text: css<Props>`
        color: ${props => props.theme.extra[props.color]};
        background-color: hsla(0, 0%, 100%, 0.25);
    `,
    outlined: css<Props>`
        color: ${props => props.theme[props.colorBase][props.color]};
        background-color: ${props => props.theme.extra[props.color]};
    `,
    contained: css<Props>`
        background-color: ${props => props.theme.extraLight[props.color]};
        box-shadow: 0 3px 4px 0px
                ${props => props.theme.extraShadow[props.color]},
            2px 0px 4px 0px ${props => props.theme.extraShadow[props.color]},
            -2px 0px 4px 0px ${props => props.theme.extraShadow[props.color]};
    `,
}

const disabled = {
    text: css<Props>`
        background-color: inherit;
        color: ${props => props.theme.extraOn.primary};
    `,
    outlined: css<Props>`
        color: white;
        background-color: inherit;
        border-color: ${props => props.theme.extraOn[props.color]};
    `,
    contained: css<Props>`
        background-color: ${props => props.theme.extra[props.color]};
    `,
}

const variant = {
    text: css<Props>`
        background-color: inherit;
        color: ${props => props.theme.extra[props.color]};

        &:hover {
            ${active.text}
        }
        &:disabled,
        &:hover:disabled {
            ${disabled.text}
        }
    `,
    outlined: css<Props>`
        background-color: inherit;
        color: ${props => props.theme.extra[props.color]};
        border: 0.5px solid ${props => props.theme.extra[props.color]};
        line-height: calc(1rem - 1px);

        &:hover {
            ${active.outlined}
        }
        &:disabled,
        &:hover:disabled {
            ${disabled.outlined}
        }
    `,
    contained: css<Props>`
        background-color: ${props => props.theme.extra[props.color]};
        box-shadow: 0 1px 3px 0px hsla(0, 0%, 30%, 0.4);

        &:hover {
            ${active.contained}
        }
        &:disabled,
        &:hover:disabled {
            ${disabled.contained}
        }
    `,
}

const round = css`
    border-radius: 50%;
    padding: 15px;
`

const roundCorner = css`
    border-radius: 100px;
    padding-left: 45px;
    padding-right: 45px;
`

const icon = css`
    padding: 3px;
`

const visibility = css`
    visibility: visible;
`

export const ButtonStyled = styled.button<Props>`
	${base}
	${props => props.visibility && visibility};
	${props => props.size && size[props.size]}
	${props => props.variant && variant[props.variant]}
	${props => props.active && active[props.variant]}
	${props => props.round && round}
	${props => props.icon && icon};
	${props => props.roundCorner && roundCorner};
`
