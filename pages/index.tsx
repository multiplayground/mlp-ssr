import Layout from '../layouts/main'
import Home from '../ui/Home'
import unfetch from 'isomorphic-unfetch'

export type Props = {
  projects: Array<any>
}

const HomePage = ({ projects }: Props) => (
  <Layout>
    <Home projects={projects} />
  </Layout>
)

HomePage.getInitialProps = async () => {
  const res = await unfetch('http://157.230.108.47/api/v1/project', {
    method: 'GET',
  });

  const json = await res.json();
  return { projects: json.results };
};

export default HomePage