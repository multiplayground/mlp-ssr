import React from 'react'
import { Transition } from 'react-transition-group'

type Props = {
    trigger: boolean
    duration: number
    children: React.ReactNode
}

const defaultProps = {
    in: undefined,
    duration: 250,
}

export const SimpleFade = (props: Props) => {
    const { duration, trigger } = props

    const defaultStyle = {
        width: '100%',
        display: 'inherit',
        justifyContent: 'inherit',
        alignItems: 'inherit',
        transitionProperty: 'transform, opacity',
        transition: `${duration}ms ease-in`,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    }

    return (
        <Transition in={trigger} timeout={duration} unmountOnExit>
            {(state: any) => (
                <div
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                >
                    {props.children}
                </div>
            )}
        </Transition>
    )
}

SimpleFade.defaultProps = defaultProps
