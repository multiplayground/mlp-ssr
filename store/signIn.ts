import { createStore } from 'effector'
import { signInUser } from '../api/signIn'
import produce from 'immer'

type ISignInStore = {
    loading: boolean
    result?: any
    status: 'start signin' | 'success' | 'error'
}

const InitialState: ISignInStore = {
    loading: false,
    status: 'start signin',
}

export const signInStore = createStore(InitialState)
    .on(signInUser, store =>
        produce(store, draftState => {
            draftState.loading = true
        })
    )
    .on(signInUser.done, (store, { result }) =>
        produce(store, draftState => {
            draftState.loading = false
            draftState.status = 'success'
            draftState.result = result.data
        })
    )
    .on(signInUser.fail, (store, { error }) =>
        produce(store, draftState => {
            draftState.loading = false
            draftState.result = error.data
            draftState.status = 'error'
        })
    )
