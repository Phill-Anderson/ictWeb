import React from 'react'
import NextImage from 'next/image'
const SliderItem = ({ img, title, text, url }) => {
    const openUrl = (url) => {
        window.open(url, "_blank")
    }
    return (
        <div className="border mr-4 rounded p-10 h-[418px] bg-white">
            <div className="overflow-hidden w-[50px]">
                <NextImage src={img} layout="responsive" />
            </div>
            <h1 className="text-[#233d63] text-[24px] leading-8 mt-[28px] mb-[20px]">{title}</h1>
            <p className="w-[240px] text-[#57667e] opacity-80 mb-[28px]">{text}</p>
            <button onClick={() => openUrl(url)}
                className="text-[#233D63] text-[16px] bg-white px-10 py-3 mr-10 border rounded-full hover:text-white hover:bg-[#ff3b30] hover:shadow-none transition duration-500 ease-in-out">
                Дэлгэрэнгүй
            </button>
        </div>
    )
}

export default SliderItem
