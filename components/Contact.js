import React from 'react'

const Contact = ({ element }) => {
    return (
        <div ref={element} id="contact" className="page-section wrapper text-center py-[140px]" data-matching-link="#contact-link">
            <h1 className="text-[42px] text-[#233D63] leading-[58px] pb-[35px]">Танд технологийн шийдвэрлэх асуудал байна уу?</h1>
            <button
                className="text-[#ff3b30] text-[18px] font-bold bg-white px-10 py-3 mr-10 border border-red-400  rounded-full myShadow hover:bg-[#ff3b30] hover:text-white hover:shadow-none transition duration-500 ease-in-out">
                Бидэнтэй холбогдоорой.
            </button>
        </div>
    )
}

export default Contact
