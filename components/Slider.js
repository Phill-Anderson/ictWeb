import React, { Component } from 'react'
import SlickSlider from "react-slick";
import SliderItem from './SliderItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FcLeft } from 'react-icons/fc'
import { FcRight } from 'react-icons/fc'

import Img1 from 'public/images/companies/aitech-logo.png'
import Img2 from 'public/images/companies/cnet-logo.png'
import Img3 from 'public/images/companies/datascience-logo.png'
import Img4 from 'public/images/companies/fiboglobal-logo.png'
import Img5 from 'public/images/companies/icontent-logo.png'
import Img6 from 'public/images/companies/itheme-logo.png'
import Img7 from 'public/images/companies/itools-logo.png'
import Img8 from 'public/images/companies/jamuha-logo.png'
import Img9 from 'public/images/companies/mibrating-logo.png'
import Img10 from 'public/images/companies/trade-logo.png'
import Img11 from 'public/images/companies/ubex-logo.png'
import Img12 from 'public/images/companies/zip-logo.png'
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <>
                <div className="flex w-[100%] justify-end py-10 pr-[20px] text-[40px] text-[#000000] opacity-40 cursor-pointer ">
                    <div className="" onClick={this.previous}><FcLeft className="hover:text-[#233D63]" /></div>
                    <div className="" onClick={this.next}><FcRight className="hover:text-[#233D63]" /></div>
                </div>
                <SlickSlider ref={c => (this.slider = c)} {...settings}>
                    <SliderItem key={1} img={Img1} title={`ЭйАй Тэк`} text={`Хиймэл оюун ухаанд суурилсан Програм хангамж хөгжүүлэлт`} url={`https://www.itools.mn/`} />
                    <SliderItem key={2} img={Img2} title={`СИНЭТ`} text={`Өндөр хурдны Интернэтийн үйлчилгээ`} url={`https://www.itools.mn/`} />
                    <SliderItem key={3} img={Img3} title={`ДАТАСАЙЕНС`} text={`Блокчэйнд суурилсан Програм Хангамж Хөгжүүлэлт`} url={`https://www.itools.mn/`} />
                    <SliderItem key={4} img={Img4} title={`ФИБО ГЛОБАЛ`} text={`Үүлэн Технологийг бүтээгч компани`} url={`https://www.itools.mn/`} />
                    <SliderItem key={5} img={Img5} title={`АЙКОНТЕНТ`} text={`Тоон контент Агрегатор болон Автоматжуулалт компани`} url={`https://www.itools.mn/`} />
                    <SliderItem key={6} img={Img6} title={`АЙ ДЕЙМ`} text={`Вэб болон Мобайл Апп Дизайн, Хөгжүүлэлт`} url={`https://www.itools.mn/`} />
                    <SliderItem key={7} img={Img7} title={`АЙ ТҮҮЛС`} text={`Үндэсний Дата Центрийн үйлчилгээ үзүүлэгч Хувьцаат компани`} url={`https://www.itools.mn/`} />
                    <SliderItem key={8} img={Img8} title={`Нейшнл Блокчейн Платформ`} text={`Блокчейн технологид суурилсан програм хангамж боловсруулах хөгжүүлэлт`} url={`https://www.itools.mn/`} />
                    <SliderItem key={9} img={Img9} title={`ЭмАйБи Рейтинг`} text={`Зээлийн мэдээллийн сангийн Програм Хөгжүүлэлт`} url={`https://www.itools.mn/`} />
                    <SliderItem key={10} img={Img10} title={`ДИЖИТАЛ ЭКСЧЕНЖ МОНГОЛИА`} text={`Монголын анхны Криптовалют Арилжааны Платформ`} url={`https://www.itools.mn/`} />
                    <SliderItem key={11} img={Img11} title={`Юби Сток Эксченж`} text={`Блокчейн системд суурилсан Хөрөнгийн Биржийн Платформ`} url={`https://www.itools.mn/`} />
                    <SliderItem key={12} img={Img12} title={`Зип Такси`} text={`Зуучлалын Платформыг Хөгжүүлэгч`} url={`https://www.itools.mn/`} />
                </SlickSlider>
            </ >
        );
    }
}
