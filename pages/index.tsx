import Head from 'next/head'
import Layout from '../components/layout'
import HeroArea from '../components/home/hero-section'
import AboutSection from '../components/home/about-section'
import ServiceSection from '../components/home/service-section'
import MissionSection from '../components/home/misssion-section'
import ReviewsSection from '../components/home/reviews-section'
import VisionSection from '../components/home/vission-section'
import ProjectsSection from '../components/home/projects-section'
import ContactForm from '../components/layout/contact-form'

export default function Index() {
  return (
      <Layout>
        <HeroArea />
        <AboutSection />
        <ServiceSection />
        <MissionSection/>
        <ReviewsSection/>
        <VisionSection/>
        <ProjectsSection/>
        <ContactForm />
      </Layout>
  )
}