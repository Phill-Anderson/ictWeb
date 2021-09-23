import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import Logo from 'public/images/logo.png'
import { FaBars } from 'react-icons/fa'
const Nav = ({ sticky, setSticky, scrollFunctions, isActiveLinks }) => {
    const { toHeader, toAboutUs, toCompanies, toContact } = scrollFunctions;
    const { activeAboutLink, activeHeaderLink, activeContactLink, activeCompaniesLink } = isActiveLinks;
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    useEffect(() => {
        document.addEventListener('keyup', function (event) {
            if (event.key === 'Escape') {
                setShowMobileMenu(false)
            }
        })
    }, [])
    return (
        <div className={`${sticky ? 'scrolled' : 'container mx-auto'}`} id="nav">
            <nav className={`${sticky ? 'py-[16px]' : 'py-[54px]'}`}>
                <div className="flex relative max-w-screen-xl mx-auto">
                    <div className='w-4/12'>
                        <div className={`pl-5 md:pl-0 ${sticky && 'sticky-logo'} `}>
                            <NextLink href="/" passHref className="flex items-center py-4 px-2">
                                <a><Image src={Logo} alt="Logo" className="mr-2" width="168" height='36' /></a>
                            </NextLink>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-end w-8/12'>
                        <ul id="menu" className="flex items-center">
                            <li onClick={toHeader}> <a href="#header-link" className={`menuItem `}>Нүүр.</a></li>
                            <li onClick={toAboutUs}> <a href="#aboutUs-link" className={`menuItem `}>Бидний тухай.</a></li>
                            <li onClick={toCompanies}> <a href="#companies-link" className={`menuItem `}>Компаниуд.</a></li>
                            <li onClick={toContact}> <a href="#contact-link" className={`menuItem `}>Холбоо барих.</a></li>
                            <li ><a href="#" className="font-normal text-gray-500 text-xl">EN</a></li>
                        </ul>
                    </div>
                    <div className=" absolute right-10 md:hidden">
                        <div className="flex">
                            <div className="pr-6 pt-1"><span className="cursor-pointer">EN</span></div>
                            <FaBars onClick={() => setShowMobileMenu(true)} className="cursor-pointer text-red-600 text-4xl" />
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`${showMobileMenu ? 'showMobileMenu' : 'hidden w-0 h-0'}`}>
                <ul className="flex flex-col justify-center items-center 
                 fixed top-0 left-0 right-0 bottom-0 z-50 bg-white">
                    <span onClick={() => setShowMobileMenu(false)} className="text-black cursor-pointer absolute top-10 right-10">X</span>
                    <li> <a href="#header-link" className="menuItem">Нүүр.</a></li>
                    <li> <a href="#aboutUs-link" className="menuItem">Бидний тухай.</a></li>
                    <li> <a href="#companies-link" className="menuItem">Компаниуд.</a></li>
                    <li> <a href="#contact-link" className="menuItem">Холбоо барих.</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav

