import { createStore, createEvent } from 'effector'
import { aboutDecrement } from './dogs'

export const contactIncrement = createEvent()
export const contactDecrement = createEvent()
export const contactResetCounter = createEvent()

export const store = createStore(0)
    .on(contactIncrement, (state: number) => state + 1)
    .on(contactDecrement, (state: number) => state - 1)
    .on(aboutDecrement, (state: number) => state - 1)
    .reset(contactResetCounter)

store.watch(console.log)