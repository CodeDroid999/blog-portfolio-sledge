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

export default function Contactus() {
  return (
      <Layout>
        <ContactForm />
      </Layout>
  )
}