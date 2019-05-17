import 'styled-components'

// and extend them!

declare module 'styled-components' {
    export interface PaletteBase {
        primary: string
        secondary: string
        background: string
        surface: string
        error: string
    }

    export interface PaletteExtra {
        default: string
        gray: string
        primary: string
        danger: string
        success: string
        warning: string
        info: string
        rose: string
        white: string
    }

    export interface TypographyAttr {
        fontWeight: number,
        fontSize: number,
        letterSpacing: number,
        lineHeight: number,
        fontFamily: string,
        tag: string,
    }

    export interface Typography {
        h1: TypographyAttr
        h2: TypographyAttr
        h3: TypographyAttr
        h4: TypographyAttr
        h5: TypographyAttr
        h6: TypographyAttr
        subtitle1: TypographyAttr
        subtitle2: TypographyAttr
        body1: TypographyAttr
        body2: TypographyAttr
        button: TypographyAttr
        caption: TypographyAttr
        overline: TypographyAttr
    }

    export interface ZIndex {
        mobileStepper: number
        appBar: number
        drawer: number
        modal: number
        snackbar: number
        tooltip: number
    }

    type ThemeIndex = {
        [x: string]: any
    }

    export interface DefaultTheme {
        palette: ThemeIndex
        paletteOn: ThemeIndex
        extra: ThemeIndex,
        extraOn: ThemeIndex,
        extraLight: ThemeIndex,
        extraShadow: ThemeIndex,
        typography: ThemeIndex,
        zIndex: ThemeIndex
        [x: string]: any
    }
}