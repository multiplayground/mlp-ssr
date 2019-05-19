import { useStore } from 'effector-react'
import { useEffect } from 'react'
import styled from 'styled-components'

import { IProject, IProjectReqParams, getProjectList } from '../api/progectList'
import Table from '../components/Table'
import { projectListStore } from '../store/projects'
import Paginator from '../components/Paginator'

const ProjectTile = () => {
    const { result, loading, offset, limit } = useStore(projectListStore)

    useEffect(() => {
        getProjectListHandler({})
    }, [])

    const pageChangeHandler = (itemIndex: number) => {
        const offset = itemIndex * limit
        getProjectListHandler({ offset, limit })
    }

    const projectColumns = [
        {
            title: '№',
            render: (_row: IProject, i: number) =>
                offset ? i + 1 + offset : i + 1,
        },
        {
            title: 'Название',
            render: (row: IProject) => row.title,
        },
        {
            title: 'Описание',
            render: (row: IProject) => row.full_description,
            style: { maxWidth: '200px' },
        },
    ]

    const getProjectListHandler = async (params: IProjectReqParams) => {
        await getProjectList(params)
    }

    const { results, count } = result

    console.log(results)

    return (
        <Wrapper>
            <Table data={results} columns={projectColumns} loading={loading} />
            <Paginator
                totalRecords={count}
                defaultPage={offset / limit}
                pageLimit={limit}
                pageNeighbours={2}
                onPageChanged={pageChangeHandler}
            />
        </Wrapper>
    )
}

export default ProjectTile

const Wrapper = styled.div``
