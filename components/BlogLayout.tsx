import AlertBanner from 'components/AlertBanner'
import CustomNavbar from './layout/navbar'
import Home from './layout/home-section'

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
      <div className="min-h-screen bg-blue-100">
        <div className="mb-8">
          <Home/>
        </div>        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}
