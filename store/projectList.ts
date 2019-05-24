import { createStore } from 'effector'
import { getProjectList, IProjectList } from '../api/projectList'
import produce from 'immer'

type IProjectListState = {
    loading: boolean
    result: IProjectList
    offset: number
    limit: number
}

const InitialState: IProjectListState = {
    loading: false,
    offset: 0,
    limit: 7,
    result: Object(),
}

export const projectListStore = createStore(InitialState)
    .on(getProjectList, store =>
        produce(store, draftState => {
            draftState.loading = true
        })
    )
    .on(getProjectList.done, (store, { result }) =>
        produce(store, draftState => {
            draftState.loading = false
            draftState.result = result
        })
    )
    .on(getProjectList.fail, store =>
        produce(store, draftState => {
            draftState.loading = false
        })
    )
