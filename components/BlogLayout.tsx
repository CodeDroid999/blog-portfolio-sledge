import AlertBanner from 'components/AlertBanner'

import Home from './layout/home-section'
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
      <div className="min-h-screen bg-gray-800">
        <div className="mb-8">
          <Home />
        </div>        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}
