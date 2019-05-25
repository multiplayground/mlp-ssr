import Layout from '../layouts/main'
import ProjectList from '../ui/ProjectList'
import { getProjectList } from '../api/projectList'
import { IProjectList, IProjectListReq } from '../api/projectList'

const defaultProps = {
    results: [],
    loading: false,
    offset: 0,
    limit: 7,
}

const ProjectListPage = (props: IProjectList & IProjectListReq) => (
    <Layout>
        <ProjectList {...props} />
    </Layout>
)

ProjectListPage.getInitialProps = async ({ query }) => {
    const data = await getProjectList({
        limit: query.limit,
        offset: query.offset,
    })
    return data
}

ProjectListPage.defaultProps = defaultProps

export default ProjectListPage
