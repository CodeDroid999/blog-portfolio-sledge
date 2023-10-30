import Home from 'components/layout/home-section'
import Projects from 'components/projects/projects-page'
import Layout from '../components/layout'
import LightCustomNavbar from 'components/layout/lightNav'
import Alert from 'components/layout/alert'

export default function Index() {
  return (
    <Layout>
      <div className="">
      <div className="header_top">
                <Alert/>
            </div>
        <LightCustomNavbar/>
      </div>
      <Projects />
    </Layout>
  )
}