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
  const { isSticky, element } = UseStickyHeader();

  useEffect(() => {
    console.log(`isSticky:${isSticky}`)
  }, [isSticky])
  return (
    <div className="">
      <div className="bg-shape-1">
        <div className={`bg-hero-image bg-no-repeat`} style={{ backgroundPosition: '90% 190px' }}>
          <Nav sticky={isSticky} />
          <Header element={element} />
        </div>
      </div>
      <div className="bg-shape-1">
        <AboutUs />
      </div>
      <div className="bg-shape-2">
        <AboutReal />
      </div>
      <div className="bg-shape-3">
        <Companies />
      </div>
      <div className="bg-shape-map">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop showUnder={160} duration={300}>
        <FaAngleUp />
      </ScrollToTop>
    </div>
  )
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
