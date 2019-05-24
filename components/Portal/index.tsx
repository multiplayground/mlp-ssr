import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export type Props = {
    selector: string
    children?: React.ReactNode
}

const defaultProps = {
    selector: 'modal-root',
}

const Portal = ({ selector, children }: Props) => {
    const [element, setElement] = useState()

    useEffect(() => {
        if (!document) return

        let wrapper = document.querySelector(`#${selector}`)

        if (!wrapper) {
            wrapper = document.createElement('div')
            wrapper.setAttribute('id', selector)
        }

        document.body.appendChild(wrapper)

        const target = document.querySelector(`#${selector}`)
        setElement(target)

        return () => {
            target &&
                document.body.contains(target) &&
                document.body.removeChild(target)
        }
    }, [])

    return element ? ReactDOM.createPortal(children, element) : null
}

Portal.defaultProps = defaultProps

export default Portal
