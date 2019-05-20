import Layout from '../layouts/main'
import ProjectList from '../ui/ProjectList'
import { getProjectList } from '../api/projectList'

const ProjectListPage = () => (
    <Layout>
        <ProjectList />
    </Layout>
)

ProjectListPage.getInitialProps = async () => {
    const data = await getProjectList({})
    return data
}

export default ProjectListPage
