import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Nav from 'components/Nav'
import Header from 'components/Header'
import AboutUs from 'components/AboutUs'
import AboutReal from 'components/AboutReal'
import Companies from 'components/Companies'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import UseStickyHeader from 'hooks/UseStickyHeader'
import UseScrollMenuActive from 'hooks/UseScrollMenuActive'
import { FaAngleUp } from 'react-icons/fa'
function Home() {
  const { isSticky, setSticky, headerEl, aboutUsEl, companiesEl, contactEl, activeAboutLink, activeHeaderLink, activeCompaniesLink, activeContactLink } = UseStickyHeader();

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const toHeader = () => {
    scrollToRef(headerEl)
    setSticky(true)
  }
  const toAboutUs = () => {
    scrollToRef(aboutUsEl)
    setSticky(true)
  }
  const toCompanies = () => {
    scrollToRef(companiesEl)
    setSticky(true)
  }
  const toContact = () => {
    scrollToRef(contactEl)
    setSticky(true)
  }

  const [visibleScrollTopButton, setVisibleScrollTopButton] = useState(false)
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
  const toggleVisibleScrollTopButton = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisibleScrollTopButton(true)
    } else if (scrolled <= 300) {
      setVisibleScrollTopButton(false)
    }
  };

  useEffect(() => {
    console.log(`isSticky:${isSticky}`)
  }, [isSticky])
  useEffect(() => {
    let lastId, topMenu, topMenuHeight, menuItems;
    topMenu = document.getElementById('menu');
    topMenuHeight = topMenu.out;
    menuItems = topMenu.childNodes;
    console.log(menuItems.forEach(el => el))
  })

  window.addEventListener('scroll', toggleVisibleScrollTopButton)
  return (
    <div className="">
      <div className="bg-shape-1">
        <div className={`bg-hero-image bg-no-repeat`} style={{ backgroundPosition: '90% 190px' }}>
          <Nav sticky={isSticky} setSticky={setSticky} scrollFunctions={{ toHeader, toAboutUs, toCompanies, toContact }} isActiveLinks={{ activeAboutLink, activeHeaderLink, activeContactLink, activeCompaniesLink }} />
          <Header element={headerEl} />
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
      <FaAngleUp style={{ display: visibleScrollTopButton ? 'inline' : 'none' }} className="cursor-pointer text-[#ff3b30] text-[30px] fixed bottom-4 right-4" onClick={scrollTop} />
    </div >
  )
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });