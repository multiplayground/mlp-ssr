import Layout from '../layouts/main'
import Home from '../ui/Home'
import { getProjectList, IProjectList } from '../api/projectList'

type Props = {
    projectList: IProjectList
}

const HomePage = (props: Props) => (
    <Layout>
        <Home {...props.projectList} />
    </Layout>
)

HomePage.getInitialProps = async () => {
    const projectList = await getProjectList({ limit: 4 })
    return { projectList }
}

export default HomePage
