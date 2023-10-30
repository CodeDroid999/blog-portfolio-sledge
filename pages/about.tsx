import Head from 'next/head'

import AboutSection from '../components/home/about-section'
import HeroArea from '../components/home/hero-section'
import MissionSection from '../components/home/misssion-section'
import ProjectsSection from '../components/home/projects-section'
import ReviewsSection from '../components/home/reviews-section'
import ServiceSection from '../components/home/service-section'
import VisionSection from '../components/home/vission-section'
import Layout from '../components/layout'
import ContactForm from '../components/layout/contact-form'
import AboutHeroArea from 'components/home/about-hero'

export default function About() {
  return (
      <Layout>
        <AboutHeroArea/>
        <AboutSection />
        <MissionSection/>
        <ReviewsSection/>
        <VisionSection/>
        <ProjectsSection/>
      </Layout>
  )
}