import Home from 'components/layout/home-section'
import Projects from 'components/projects/projects-page'
import Layout from '../components/layout'

export default function Index() {
  return (
    <Layout>
      <div className="bg-gray-800">
        <Home />
      </div>
      <Projects />
    </Layout>
  )
}