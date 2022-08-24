import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

function Layout({ children }) {
  return (
    <>
      <main>
        <Menu />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
