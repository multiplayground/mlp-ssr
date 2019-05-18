import { Typography } from 'styled-components'

const FontFamily1 = "'Roboto', sans-serif"
const FontFamily2 = "'Roboto Condensed', sans-serif"

const typography: Typography = {
    h1: {
        fontWeight: 300,
        fontSize: 6,
        letterSpacing: -1.5,
        lineHeight: 1,
        fontFamily: FontFamily1,
        tag: 'h2',
    },
    h2: {
        fontWeight: 300,
        fontSize: 3.75,
        letterSpacing: -0.5,
        lineHeight: 1,
        fontFamily: FontFamily1,
        tag: 'h2',
    },
    h3: {
        fontWeight: 400,
        fontSize: 3,
        letterSpacing: 0,
        lineHeight: 1.04,
        fontFamily: FontFamily1,
        tag: 'h3',
    },
    h4: {
        fontWeight: 400,
        fontSize: 2.125,
        letterSpacing: 0.25,
        lineHeight: 1.17,
        fontFamily: FontFamily1,
        tag: 'h4',
    },
    h5: {
        fontWeight: 400,
        fontSize: 1.5,
        letterSpacing: 0,
        lineHeight: 1.33,
        fontFamily: FontFamily1,
        tag: 'h5',
    },
    h6: {
        fontWeight: 300,
        fontSize: 1.15,
        letterSpacing: 0,
        lineHeight: 1.4,
        fontFamily: FontFamily1,
        tag: 'h6',
    },
    subtitle1: {
        fontWeight: 400,
        fontSize: 1,
        letterSpacing: 0.15,
        lineHeight: 1.75,
        fontFamily: FontFamily1,
        tag: 'h6',
    },
    subtitle2: {
        fontWeight: 500,
        fontSize: 0.875,
        letterSpacing: 0.1,
        lineHeight: 1.57,
        fontFamily: FontFamily1,
        tag: 'h6',
    },
    body1: {
        fontWeight: 400,
        fontSize: 1,
        letterSpacing: 0.5,
        lineHeight: 1.5,
        fontFamily: FontFamily1,
        tag: 'p',
    },
    body2: {
        fontWeight: 400,
        fontSize: 0.875,
        letterSpacing: 0.25,
        lineHeight: 1.5,
        fontFamily: FontFamily1,
        tag: 'p',
    },
    button: {
        fontWeight: 400,
        fontSize: 0.875,
        letterSpacing: 1.25,
        lineHeight: 1.5,
        fontFamily: FontFamily2,
        tag: 'span',
    },
    caption: {
        fontWeight: 400,
        fontSize: 0.75,
        letterSpacing: 0.4,
        lineHeight: 1.66,
        fontFamily: FontFamily1,
        tag: 'span',
    },
    overline: {
        fontWeight: 400,
        fontSize: 0.75,
        letterSpacing: 1.5,
        lineHeight: 2.66,
        fontFamily: FontFamily1,
        tag: 'span',
    },
}

export default typography
