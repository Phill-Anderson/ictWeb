import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import Logo from 'public/images/logo.png'
const Nav = () => {
    return (
        <div className="container mx-auto">
            <nav className="py-[54px]">
                <div className="flex max-w-screen-xl mx-auto">
                    <div className='w-4/12'>
                        <div className="">
                            <NextLink href="/" passHref className="flex items-center py-4 px-2">
                                <a>
                                    <Image src={Logo} alt="Logo" className="h-8 w-8 mr-2" width="168" height='36' />
                                </a>
                            </NextLink>
                        </div></div>
                    <div className='hidden md:flex justify-end w-8/12'>
                        <ul className="flex items-center">
                            <li> <a href="#" className="menuItem">Нүүр.</a></li>
                            <li> <a href="#" className="menuItem">Бидний тухай.</a></li>
                            <li> <a href="#" className="menuItem">Компаниуд.</a></li>
                            <li> <a href="#" className="menuItem">Холбоо барих.</a></li>
                            <li><a href="#" className="font-normal text-gray-500 text-xl">EN</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav
