import Layout from '../layouts/main'
import Home from '../ui/Home'
import { getProjectList, IProjectList } from '../api/projectList'

const HomePage = (props: IProjectList) => (
    <Layout>
        <Home {...props} />
    </Layout>
)

HomePage.getInitialProps = async () => {
    const data = await getProjectList({ limit: 4 })
    return data
}

export default HomePage
