import React from 'react'
import NextImage from 'next/image'
import AboutUsImage from 'public/images/shape/hero.png'
import { FaAngleRight } from 'react-icons/fa';
const AboutUs = () => {
    return (
        <div id="aboutUs" className="page-section wrapper relative pb-40" data-matching-link="#aboutUs-link">
            <div style={{ zIndex: 99 }}>
                <div className="mt-20 mb-1 px-6 w-[380px] bg-[#FBFBFF] border border-[#E9E9E9] rounded">
                    <p className="text-[15px] text-[#677180] font-medium leading-8">
                        <span className="text-[#FF605E]">Зөв Ирээдүйг</span> Зөв шийдлээр Зөв хүн бүтээнэ
                    </p>
                </div>
                <h1 className="text-[62px] font-medium myBlue leading-[72px] pt-[25px] px-0 pb-[35px] tracking-tight">
                    Мэдээлэл технологийн<br />
                    тэргүүлэгч үндэсний<br />
                    групп компани.
                </h1>
                <p className="py-10 text-[#8b8e92] text-[20px] leading-8">
                    Бид мэдээлэл технологийн шилдэг шийдлийг ашиглан,<br />
                    хэрэглэгчиддээ тасралтгүй, найдвартай үйлчилгээг хүргэнэ.
                </p>
                <button className="text-white text-[18px] font-bold bg-[#ff3b30]  px-10 py-3 mr-10 border rounded-full myShadow hover:border-red-400 hover:bg-white hover:text-[#ff3b30] hover:shadow-none transition duration-500 ease-in-out">
                    Бидний тухай <FaAngleRight style={{ display: 'inline-block', marginTop: '-1' }} />
                </button>
            </div>
            <div className="absolute hidden md:block" style={{ top: '0', right: '-200px', zIndex: '0' }}>
                <NextImage src={AboutUsImage} width={640} height={602} />
            </div>
        </div>
    )
}

export default AboutUs
