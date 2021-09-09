import Head from 'next/head'
import Nav from 'components/Nav'
import Header from 'components/Header'
import AboutUs from 'components/AboutUs'
import Companies from 'components/Companies'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
export default function Home() {
  return (
    <div className="">
      <div className="bg-shape-1">
        <div className="bg-hero-image bg-no-repeat" style={{ backgroundPosition: '90% 190px' }}>
          <Nav />
          <Header />
        </div>
      </div>
      <AboutUs />
      <Companies />
      <Contact />
      <Footer />
    </div>
  )
}
