import { useEffect, useState, useRef } from "react"

function useSticky() {
    const [isSticky, setSticky] = useState(false)

    const [activeHeaderLink, setActiveHeaderLink] = useState(false)
    const [activeAboutLink, setActiveAboutLink] = useState(false)
    const [activeCompaniesLink, setActiveCompaniesLink] = useState(false)
    const [activeContactLink, setActiveContactLink] = useState(false)

    const headerEl = useRef(null);
    const aboutUsEl = useRef(null);
    const companiesEl = useRef(null);
    const contactEl = useRef(null);

    const handleScrollActiveLink = () => {
        window.scrollY > 0 || window.scrollY < (headerEl.current.offsetBottom) ? setActiveHeaderLink(true) : setActiveHeaderLink(false)
        window.scrollY > (aboutUsEl.current.offsetTop) || window.scrollY < (aboutUsEl.current.offsetBottom) ? setActiveAboutLink(true) : setActiveAboutLink(false)
        window.scrollY > (companiesEl.current.offsetTop) && window.scrollY < (companiesEl.current.offsetBottom) ? setActiveCompaniesLink(true) : setActiveCompaniesLink(false)
        window.scrollY > (contactEl.current.offsetTop) && window.scrollY < (contactEl.current.offsetBottom) ? setActiveContactLink(true) : setActiveContactLink(false)
    }
    const handleScroll = () => {
        window.scrollY > (headerEl.current.offsetTop + 250) ? setSticky(true) : setSticky(false)
    }

    // This function handles the scroll performance issue
    const debounce = (func, wait = 20, immediate = true) => {
        let timeOut
        return () => {
            let context = this,
                args = arguments
            const later = () => {
                timeOut = null
                if (!immediate) func.apply(context, args)
            }
            const callNow = immediate && !timeOut
            clearTimeout(timeOut)
            timeOut = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", debounce(handleScroll))
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [debounce, handleScroll])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollActiveLink)
        return () => {
            window.removeEventListener("scroll", () => handleScrollActiveLink)
        }
    }, [handleScroll])

    return { isSticky, setSticky, headerEl, aboutUsEl, companiesEl, contactEl, activeAboutLink, activeHeaderLink, activeCompaniesLink, activeContactLink }
}

export default useSticky