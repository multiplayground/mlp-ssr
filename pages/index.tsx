import Layout from '../layouts/main'
import Home from '../ui/Home'
import unfetch from 'isomorphic-unfetch'

export type Props = {
    projectList: Array<any>
}

const HomePage = ({ projectList }: Props) => (
    <Layout>
        <Home projectList={projectList} />
    </Layout>
)

HomePage.getInitialProps = async () => {
    const res = await unfetch('http://157.230.108.47/api/v1/project', {
        method: 'GET',
    })

    const json = await res.json()
    return { projectList: json.results }
}

export default HomePage
