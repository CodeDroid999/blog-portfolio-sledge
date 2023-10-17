import { CMS_NAME } from '../lib/constants'
import CustomNavbar from './layout/navbar'

const Intro = () => {
  return (
    <div className="div">
      <CustomNavbar />
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
          </section>
    </div>
  )
}

export default Intro
