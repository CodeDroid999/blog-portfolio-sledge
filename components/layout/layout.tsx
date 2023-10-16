import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import Alert from './alert'
import Footer from './footer'
import Meta from './'
config.autoAddCss = false;

type Props = {
  children: React.ReactNode
}

const Layout = ({children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
