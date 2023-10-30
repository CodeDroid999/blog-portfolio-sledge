import AlertBanner from 'components/AlertBanner'

import Alert from './layout/alert'
import Home from './layout/home-section'
import LightCustomNavbar from './layout/lightNav'
import CustomNavbar from './layout/navbar'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="mb-8 bg-white">
          <div className="header_top">
            <Alert/>
          </div>
          <LightCustomNavbar/>
        </div>        
        <main>{children}</main>
      </div>
    </>
  )
}
