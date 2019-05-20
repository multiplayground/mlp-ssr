import Layout from '../layouts/main'
import Project from '../ui/Project'
import unfetch from 'isomorphic-unfetch'
import { NextContext } from 'next'
import { IProject } from '../api/project'

type Props = {
    project: IProject
}

const ProjectPage = (props: Props) => (
    <Layout>
        <Project data={props.project} />
    </Layout>
)

ProjectPage.getInitialProps = async ({ query }: NextContext) => {
    const res = await unfetch(
        `http://157.230.108.47/api/v1/project/${query.slug}`,
        {
            method: 'GET',
        }
    )

    const json = await res.json()
    return { project: json }
}

export default ProjectPage
