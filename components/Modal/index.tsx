import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'

import Portal from '../Portal'
import { SimpleShift as Transition } from '../Transition/index'

export type Props = {
    top: string | null
    left: string | null
    overlay: boolean
    onClose: Function
    zIndex?: number
    disableEvents: boolean
    isOpen: boolean
    children?: React.ReactNode
}

const defaultProps = {
    top: null,
    left: null,
    isOpen: false,
    onClose: Function(),
    overlay: false,
    disableEvents: false,
}

const Modal = (props: Props) => {
    const { isOpen, overlay, disableEvents } = props
    const contentRef = useRef(null)
    const overlayRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside) // Clean up the subscription
    }, [])

    const handleClickOutside = (event: MouseEvent) => {
        const modalNode = ReactDOM.findDOMNode(contentRef && contentRef.current)
        const overlayNode = ReactDOM.findDOMNode(
            overlayRef && overlayRef.current
        )

        if (modalNode && event.target === overlayNode) {
            props.onClose()
        }
        if (modalNode && !modalNode.contains(event.target as Node)) {
            props.onClose()
        }
    }

    const content = (
        <Content {...props} ref={contentRef}>
            {props.children}
        </Content>
    )

    const modal = (
        <Portal selector="root-modal">
            <Transition trigger={isOpen} duration={150}>
                {overlay ? (
                    <Overlay
                        overlay={overlay}
                        disableEvents={disableEvents}
                        ref={overlayRef}
                    >
                        {content}
                    </Overlay>
                ) : (
                    content
                )}
            </Transition>
        </Portal>
    )

    return modal
}

Modal.defaultProps = defaultProps

export default Modal

const Content = styled.div<Props>`
    position: absolute;
    z-index: ${props => props.zIndex || props.theme.zIndex.modal};
    left: ${props => (props.left ? props.left : '50%')};
    top: ${props => (props.top ? props.top : '50%')};
    transform: translate(
        ${props => (props.left ? '0%' : '-50%')},
        ${props => (props.top ? '0%' : '-50%')}
    );
`

const disableEvents = css`
    pointer-events: none;
`
type IOverlay = Pick<Props, 'overlay' | 'disableEvents'>

const Overlay = styled.div<IOverlay>`
    ${props => props.disableEvents && disableEvents};
    z-index: ${props => props.theme.zIndex.modalOverlay};
    background-color: ${props => props.overlay && 'rgba(0, 0, 0, 0.4)'};
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
`
