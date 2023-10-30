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
      <div className="min-h-screen bg-orange-50">
        <div className="mb-8 bg-gray-200">
          <LightCustomNavbar/>
        </div>        
        <main>{children}</main>
      </div>
    </>
  )
}
