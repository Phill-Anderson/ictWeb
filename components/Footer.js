import React from 'react'
import NextImage from 'next/image'
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'

import IctLogo from 'public/images/footer/ictgroup-logo.png'

const Footer = () => {
    return (
        <div className="wrapper text-center pt-14 pb-14">
            <NextImage src={IctLogo} width="233" height="50" />
            <p p className="leading-7 text-[#57667E] text-[17px] py-8" > info@ictgroup.mn</p>
            <div className="flex pl-[45%] pb-4">
                <button className="mr-2 border border-[#e8e8e8] w-[40px] h-[40px] opacity-80 rounded-full p-2 text-[#57667e] hover:bg-[#ff3b30] hover:text-white"><FaFacebook /></button>
                <button className="mr-2 border border-[#e8e8e8] w-[40px] h-[40px] opacity-80 rounded-full p-2 text-[#57667e] hover:bg-[#ff3b30] hover:text-white"><FaTwitter /></button>
                <button className="mr-2 border border-[#e8e8e8] w-[40px] h-[40px] opacity-80 rounded-full p-2 text-[#57667e] hover:bg-[#ff3b30] hover:text-white"><FaGoogle /></button>
            </div>
            <p className="text-[11px] text-[#798598] uppercase leading-[1px] tracking-wider mt-[35px]">© 2021 ЗОХИОГЧИЙН ЭРХ ХУУЛИАР ХАМГААЛАГДСАН</p>
        </div >
    )
}

export default Footer
