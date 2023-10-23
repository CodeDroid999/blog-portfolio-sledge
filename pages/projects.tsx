import ProjectsSection from 'components/home/projects-section'
import Head from 'next/head'

import HeroArea from '../components/home/hero-section'
import Layout from '../components/layout'

export default function Index() {
  return (
      <Layout>
        <HeroArea />
        <ProjectsSection/>
      </Layout>
  )
}