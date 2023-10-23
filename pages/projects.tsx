import Alert from 'components/alert'
import ProjectsSection from 'components/home/projects-section'
import Home from 'components/layout/home-section'
import CustomNavbar from 'components/layout/navbar'
import Projects from 'components/projects/projects-page'
import Shorts from 'components/projects/shorts-projects'
import Head from 'next/head'

import HeroArea from '../components/home/hero-section'
import Layout from '../components/layout'

export default function Index() {
  return (
    <Layout>
      <div className="bg-gray-800">
        <Home />
      </div>
      <Projects />
      <Shorts />
    </Layout>
  )
}