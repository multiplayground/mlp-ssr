import { createEffect } from 'effector'

import { HOST } from './config'

export interface ISignUpRequest {
    login?: string
    email?: string
    phone?: number
    password1?: string
    password2?: string
}

export interface ISignUpResponse {
    data: any
    response: Response
}

export const signUpUser = createEffect<
    ISignUpRequest,
    ISignUpResponse,
    ISignUpResponse
>('signun user').use(async params => {
    const response = await fetch(`${HOST}/api/v1/user/`, {
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
