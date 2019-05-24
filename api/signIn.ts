import { createEffect } from 'effector'

export interface ISignInRequest {
    login?: string
    password?: string
}

export interface ISignInResponse {
    data: {
        token: string
    }
    response: Response
}

export const signInUser = createEffect<
    ISignInRequest,
    ISignInResponse,
    ISignInResponse
>('signin user').use(async params => {
    const response = await fetch(`http://157.230.108.47/api-token-auth/`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    const result = { response, data }

    if (response.status >= 400) return Promise.reject(result)

    return result
})
