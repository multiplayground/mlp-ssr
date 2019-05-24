import { createStore } from 'effector'
import { signUpUser } from '../api/signUp'
import produce from 'immer'

type ISignUpState = {
    loading: boolean
    result?: any
    status: 'start signup' | 'success' | 'error'
}

const InitialState: ISignUpState = {
    loading: false,
    status: 'start signup',
}

export const signUpStore = createStore(InitialState)
    .on(signUpUser, store =>
        produce(store, draftState => {
            draftState.loading = true
        })
    )
    .on(signUpUser.done, (store, { result }) =>
        produce(store, draftState => {
            draftState.loading = false
            draftState.status = 'success'
            draftState.result = result.data
        })
    )
    .on(signUpUser.fail, (store, { error }) =>
        produce(store, draftState => {
            draftState.loading = false
            draftState.result = error.data
            draftState.status = 'error'
        })
    )
