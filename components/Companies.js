import React from 'react'
import Slider from './Slider'
const Companies = () => {
    return (
        <div id="companies" className="page-section wrapper pb-40" data-matching-link="#companies-link">
            <div className="pt-60">
                <h1 className="text-[#233D63] text-[48px] leading-[60px]">Манай Компаниуд</h1>
                <p className="text-[#546886] text-[20px] pt-[20px]">
                    Мэдээллийн Технологийн шилдэг шийдлийг ашиглан,<br />
                    хэрэглэгчиддээ тасралтгүй, найдвартай үйлчилгээг хүргэнэ.
                </p>
                <Slider />
            </div>
        </div>
    )
}

export default Companies
