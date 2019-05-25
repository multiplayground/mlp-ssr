import { createEffect } from 'effector'
import { IProject } from './project'

import { HOST } from './config'

export interface IProjectList {
    count: number
    next: string
    previous: string
    results: Array<IProject>
}

export interface IProjectListReq {
    limit: number
    offset: number
}

export const getProjectList = createEffect<IProjectListReq, IProjectList, {}>(
    'get project list'
).use(async params => {
    const urlParams = new URLSearchParams(Object.entries(params))
    const res = await fetch(`${HOST}/api/v1/project${'?' + urlParams}`)
    const data = await res.json()
    return data
})
