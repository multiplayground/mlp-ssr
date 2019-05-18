import { useStore } from 'effector-react'

import Layout from '../../layouts/main'
import {
    contactDecrement,
    contactIncrement,
    contactResetCounter,
    store,
} from '../../store/sandbox/counter'

export default () => {
    const counter = useStore(store)

    const incrementHandle = (e: React.MouseEvent) => {
        let button = e.target as HTMLButtonElement
        console.log(button.textContent)
        contactIncrement()
    }
    const decrementHandle = () => {
        contactDecrement()
    }
    const resetCounterHandle = () => {
        contactResetCounter()
    }

    return (
        <Layout>
            <div>{counter}</div>
            <button onClick={incrementHandle}>+</button>
            <button onClick={decrementHandle}>-</button>
            <button onClick={resetCounterHandle}>reset</button>
        </Layout>
    )
}
