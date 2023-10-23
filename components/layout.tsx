import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

type Props = {
  children: React.ReactNode
}

const Layout = ({children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-trueGray-100">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
