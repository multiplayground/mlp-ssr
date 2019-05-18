import { createStore, createEvent } from 'effector'
import { getRandomDog } from '../../api/sandbox/getDog'

export const aboutIncrement = createEvent()
export const aboutDecrement = createEvent()
export const aboutResetCounter = createEvent()

export const countStore = createStore(0)
    .on(aboutIncrement, (state: number) => state + 1)
    .on(aboutDecrement, (state: number) => state - 1)
    .reset(aboutResetCounter)

export const dogStore = createStore('')
    .on(getRandomDog, () => 'https://loading.io/s/asset/preview/255257.png')
    .on(getRandomDog.done, (store, { result }) => result.message)
    .on(
        getRandomDog.fail,
        () =>
            'https://banner2.kisspng.com/20180320/rue/kisspng-error-computer-icons-orange-error-icon-5ab143d3089ac7.8478409115215666750353.jpg'
    )
    .reset(aboutResetCounter)
