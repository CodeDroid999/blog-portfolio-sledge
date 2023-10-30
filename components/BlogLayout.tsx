import AlertBanner from 'components/AlertBanner'

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
          <LightCustomNavbar/>
        </div>        
        <main>{children}</main>
      </div>
    </>
  )
}
