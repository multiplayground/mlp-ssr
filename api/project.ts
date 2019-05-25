import { createEffect } from 'effector'

import { HOST } from './config'

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

export interface IProjectReq {
    slug?: number
}

export const getProject = createEffect<{}, IProject, {}>('get project').use(
    async (params: IProjectReq) => {
        const res = await fetch(
            `${HOST}/api/v1/project/${params.slug}`
        )
        const data = await res.json()
        return data
    }
)
