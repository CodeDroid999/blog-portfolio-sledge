import Home from 'components/layout/home-section'
import Projects from 'components/projects/projects-page'
import Layout from '../components/layout'
import LightCustomNavbar from 'components/layout/lightNav'

export default function Index() {
  return (
    <Layout>
      <div className="">
        <LightCustomNavbar/>
      </div>
      <Projects />
    </Layout>
  )
}