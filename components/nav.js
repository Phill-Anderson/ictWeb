import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import Logo from 'public/images/logo.png'
const Nav = () => {
    return (
        <nav className="bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <NextLink href="/" passHref className="flex items-center py-4 px-2">
                                <a>
                                    <Image src={Logo} alt="Logo" className="h-8 w-8 mr-2" width="168" height='36' />
                                </a>
                            </NextLink>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <ul className="flex">
                                <li> <a href="#" className="font-semibold text-gray-500 text-lg mr-8">Нүүр.</a></li>
                                <li> <a href="#" className="font-semibold text-gray-500 text-lg mr-8">Бидний тухай.</a></li>
                                <li> <a href="#" className="font-semibold text-gray-500 text-lg mr-8">Компаниуд.</a></li>
                                <li> <a href="#" className="font-semibold text-gray-500 text-lg mr-8">Холбоо барих.</a></li>
                                <li> <a href="#" className="font-semibold text-gray-500 text-lg mr-8">EN.</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav
