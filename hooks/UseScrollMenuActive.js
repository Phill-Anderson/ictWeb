import React, { useState, useEffect, useRef } from 'react'
function UseScrollMenuActive() {
    const [activeHeaderLink, setActiveHeaderLink] = useState(false)
    const [activeAboutLink, setActiveAboutLink] = useState(false)
    const [activeCompaniesLink, setActiveCompaniesLink] = useState(false)
    const [activeContactLink, setActiveContactLink] = useState(false)

    const handleScrollActiveLink = () => {
        window.scrollY > (element.current.offsetTop) || window.scrollY < (element.current.offsetBottom) ? setActiveHeaderLink(true) : setActiveHeaderLink(false)
        window.scrollY > (aboutUsEl.current.offsetTop) || window.scrollY < (aboutUsEl.current.offsetBottom) ? setActiveAboutLink(true) : setActiveAboutLink(false)
        window.scrollY > (companiesEl.current.offsetTop) || window.scrollY < (companiesEl.current.offsetBottom) ? setActiveCompaniesLink(true) : setActiveCompaniesLink(false)
        window.scrollY > (contactEl.current.offsetTop) || window.scrollY < (contactEl.current.offsetBottom) ? setActiveContactLink(true) : setActiveContactLink(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollActiveLink)
        return () => {
            window.removeEventListener("scroll", () => handleScrollActiveLink)
        }
    }, [handleScrollActiveLink])
    return { activeAboutLink, activeHeaderLink, activeCompaniesLink, activeContactLink }
}
export default UseScrollMenuActive