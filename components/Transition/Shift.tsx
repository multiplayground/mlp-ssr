import React from 'react'
import { Transition } from 'react-transition-group'

type Props = {
    trigger: boolean
    duration: number
    children: any
}

const defaultProps = {
    trigger: false,
    duration: 250,
}

export const SimpleShift = (props: Props) => {
    const { duration, trigger, children } = props

    const defaultStyle = {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        display: 'inherit',
        justifyContent: 'inherit',
        alignItems: 'inherit',
        transitionProperty: 'transform, opacity',
        transition: `${duration}ms ease-in`,
        opacity: 0,
    }

    const start = `translateY(-25px)`
    const end = `translateY(25px)`

    const transitionStyles = {
        entering: {
            transform: start,
        },
        entered: {
            opacity: 1,
        },
        exiting: {
            transform: end,
        },
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
                    {children}
                </div>
            )}
        </Transition>
    )
}

SimpleShift.defaultProps = defaultProps
