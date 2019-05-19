import { createEffect } from 'effector'

export interface IProject {
    id: number
    status: object
    technologies: Array<object>
    title: string
    slug: string
    preview: string
    short_description: string
    full_description: string
    number_of_people: number
    date_of_created: string
    date_of_updted: string
    date_of_end: string
    is_active: boolean
}

export interface IProjectList {
    count: number
    next: string
    previous: string
    results: Array<IProject>
}

export interface IProjectReqParams {
    limit?: number
    offset?: number
}

export const getProjectList = createEffect<{}, IProjectList, {}>(
    'get project list'
).use(async (params: IProjectReqParams) => {
    const urlParams = new URLSearchParams(Object.entries(params))
    const res = await fetch(
        `http://157.230.108.47/api/v1/project${'?' + urlParams}`
    )
    const data = await res.json()
    return data
})
