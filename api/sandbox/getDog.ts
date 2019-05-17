import { createEffect } from 'effector'

export interface DogRandom {
    status: string
    message: string
}

export const getRandomDog = createEffect<{}, DogRandom, {}>('get user')
    .use(async () => {
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
        await new Promise(resolve => setTimeout(resolve, 1300));
        const data = await res.json()
        return data
    })