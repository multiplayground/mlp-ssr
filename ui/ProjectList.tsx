import { useStore } from 'effector-react'
import { useEffect } from 'react'
import styled from 'styled-components'

import { IProject, IProjectListReq, getProjectList } from '../api/projectList'
import Table from '../components/Table'
import { projectListStore } from '../store/projectList'
import Paginator from '../components/Paginator'
import Text from '../components/Text'
import Router from 'next/router'

const ProjectList = () => {
    const { result, loading, offset, limit } = useStore(projectListStore)

    useEffect(() => {
        if (!result.results) getProjectListHandler({})
    }, [])

    const pageChangeHandler = (itemIndex: number) => {
        const offset = itemIndex * limit
        getProjectListHandler({ offset, limit })
    }

    const getProjectListHandler = async (params: IProjectListReq) => {
        await getProjectList(params)
    }

    const rowClickHandle = (row: IProject) => {
        Router.push(`/project/${row.slug}`)
    }

    const projectColumns = [
        {
            title: '№',
            render: (_row: IProject, i: number) =>
                offset ? i + 1 + offset : i + 1,
            style: { textAlign: 'center' },
        },
        {
            title: 'Название проекта',
            render: (row: IProject) => row.title,
        },
        {
            title: 'Технологии',
            render: (row: IProject) =>
                row.technologies.map((tech: any) => tech.title).join(', '),
            style: { maxWidth: '200px' },
        },
        {
            title: 'Количество участников',
            render: (row: IProject) => row.number_of_people,
            style: { maxWidth: '200px' },
        },
        {
            title: 'Статус',
            render: (row: IProject) =>
                row.is_active ? 'активный' : 'завершен',
            style: { maxWidth: '200px', textAlign: 'center' },
        },
    ]

    const { results, count } = result

    return (
        <Wrapper>
            <ListWrapper>
                <Filters />
                <List>
                    <Text variant="h5">Проекты</Text>
                    <Table
                        data={results}
                        columns={projectColumns}
                        loading={loading}
                        onRowClick={rowClickHandle}
                    />
                </List>
            </ListWrapper>
            <Controls>
                <Paginator
                    totalRecords={count}
                    defaultPage={offset / limit}
                    pageLimit={limit}
                    pageNeighbours={2}
                    onPageChanged={pageChangeHandler}
                />
            </Controls>
        </Wrapper>
    )
}

export default ProjectList

const Wrapper = styled.div`
    margin: 65px;
    margin-bottom: 0px;
`
const ListWrapper = styled.div`
    min-height: 527px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 25px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.24);
`
const Filters = styled.div`
    height: 60px;
    box-shadow: 0 7px 17px -13px hsl(0, 0%, 79%);
    margin-bottom: 15px;
`
const List = styled.div`
    padding: 15px 45px 45px 45px;
    tbody tr td {
        background-color: hsl(210, 14%, 97%);
        margin: 3px 0px;
        border-radius: 3px;
        padding: 10px 8px;
        border-top: 5px solid transparent;
    }

    tbody tr:hover td {
        background-color: #ecf8ff;
        cursor: pointer;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: flex-start;

    & > button {
        outline: none;
        padding: 8px 12px;
        border: 1px solid transparent;
        border-radius: 3px;
        background-color: white;
        margin-right: 15px;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.24);
        cursor: pointer;
        :hover {
            border: 1px solid hsl(0, 0%, 60%);
        }
    }
`
