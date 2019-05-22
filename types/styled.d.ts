import 'styled-components'

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
        fontWeight: number
        fontSize: number
        letterSpacing: number
        lineHeight: number
        fontFamily: string
        tag: string
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
        textField: TypographyAttr
    }

    export interface ZIndex {
        mobileStepper: number
        appBar: number
        drawer: number
        modal: number
        snackbar: number
        tooltip: number
        modalOverlay: number
    }

    export interface DefaultTheme {
        palette: PaletteBase
        paletteOn: PaletteBase
        extra: PaletteExtra
        extraOn: PaletteExtra
        extraLight: PaletteExtra
        extraShadow: PaletteExtra
        typography: Typography
        zIndex: ZIndex
    }
}
