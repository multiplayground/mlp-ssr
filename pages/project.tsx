import Layout from '../layouts/main'
import Project from '../ui/Project'
import { NextContext } from 'next'
import { IProject } from '../api/project'
import { getProject } from '../api/project'

const ProjectPage = (props: IProject) => (
    <Layout>
        <Project {...props} />
    </Layout>
)

ProjectPage.getInitialProps = async ({ query }: NextContext) => {
    const data = await getProject({ slug: query.slug as string })
    return data
}

export default ProjectPage
