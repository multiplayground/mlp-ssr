import { createStore } from 'effector'
import { getProject, IProject } from '../api/project'
import produce from 'immer'

type IInitialState = {
    loading: boolean
    result: IProject
}

const InitialState: IInitialState = {
    loading: false,
    result: Object(),
}

export const projectStore = createStore(InitialState)
    .on(getProject, store =>
        produce(store, draftState => {
            draftState.loading = true
        })
    )
    .on(getProject.done, (store, { result }) =>
        produce(store, draftState => {
            draftState.loading = false
            draftState.result = result
        })
    )
    .on(getProject.fail, store =>
        produce(store, draftState => {
            draftState.loading = false
        })
    )
