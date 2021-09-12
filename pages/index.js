import React, { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import Nav from 'components/Nav'
import Header from 'components/Header'
import AboutUs from 'components/AboutUs'
import AboutReal from 'components/AboutReal'
import Companies from 'components/Companies'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

import ScrollToTop from 'react-scroll-up'
import { FaAngleUp } from 'react-icons/fa'
import UseStickyHeader from 'hooks/UseStickyHeader'
function Home() {
  const headerEl = useRef(null);
  const aboutUsEl = useRef(null);
  const companiesEl = useRef(null);
  const contactEl = useRef(null);

  const { isSticky, element } = UseStickyHeader();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 100, behavior: 'auto' })
  }

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const toHeader = () => scrollToRef(element)
  const toAboutUs = () => scrollToRef(aboutUsEl)
  const toCompanies = () => scrollToRef(companiesEl)
  const toContact = () => scrollToRef(contactEl)

  useEffect(() => {
    console.log(`isSticky:${isSticky}`)
  }, [isSticky])
  return (
    <div className="">
      <div className="bg-shape-1">
        <div className={`bg-hero-image bg-no-repeat`} style={{ backgroundPosition: '90% 190px' }}>
          <Nav sticky={isSticky} scrollFunctions={{ toHeader, toAboutUs, toCompanies, toContact }} />
          <Header element={element} />
        </div>
      </div>
      <div className="bg-shape-1">
        <AboutUs element={aboutUsEl} />
      </div>
      <div className="bg-shape-2">
        <AboutReal />
      </div>
      <div className="bg-shape-3">
        <Companies element={companiesEl} />
      </div>
      <div className="bg-shape-map">
        <Contact element={contactEl} />
      </div>
      <Footer />
      {/*    <ScrollToTop showUnder={160} duration={300}>
        <FaAngleUp />
      </ScrollToTop> */}
      <FaAngleUp className="cursor-pointer text-black fixed bottom-4 right-4" onClick={scrollTop} />
    </div>
  )
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
