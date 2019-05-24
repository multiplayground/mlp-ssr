import { createEffect } from 'effector'
import { IProject } from './project'

export interface IProjectList {
    count: number
    next: string
    previous: string
    results: Array<IProject>
}

export interface IProjectListReq {
    limit?: number
    offset?: number
}

export const getProjectList = createEffect<IProjectListReq, IProjectList, {}>(
    'get project list'
).use(async params => {
    const urlParams = new URLSearchParams(Object.entries(params))
    const res = await fetch(
        `http://157.230.108.47/api/v1/project${'?' + urlParams}`
    )
    const data = await res.json()
    return data
})
