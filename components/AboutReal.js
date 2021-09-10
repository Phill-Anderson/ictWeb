import React from 'react'
import NextImage from 'next/image'
import AboutUsImage1 from 'public/images/aboutUs/coding-office.png'
import AboutUsImage2 from 'public/images/aboutUs/pic1.jpg'
const AboutReal = () => {
    return (
        <div className="wrapper">
            <div className="flex">
                <div className="hidden md:block w-[50%]">
                    <div className="relative">
                        <div className="absolute top-0 left-0 w-[180px] h-[200px] bg-blue-700 rounded" />
                        <div className="pl-20 pt-20">
                            <NextImage src={AboutUsImage1} className="rounded" />
                        </div>
                    </div>
                    <div className="relative pt-10">
                        <div className="absolute top-10 left-0 w-[180px] h-[200px] bg-blue-700 rounded" />
                        <div className="pl-20 pt-20">
                            <NextImage src={AboutUsImage2} className="rounded" />
                        </div>
                    </div>

                </div>
                <div className="w-[100%] pl-10 sm:w-[50%]">
                    <div className="pt-20">
                        <h1 className="text-[#ff3b30] text-[18px] font-medium pb-8">КОМПАНИЙН ТУХАЙ</h1>
                        <h3 className="text-[#233D63] text-[48px] leading-[60px]">Дэлхийд өрсөлдөх<br /> үндэсний компани</h3>
                        <p className="pt-10 pb-5 leading-7 text-[17px] text-[#57667E] font-semibold">
                            АйСиТи групп ХХК нь 2013 онд Монгол улсын стратегийн салбар болох Мэдээллийн технологи, Харилцаа холбооны салбарт группын зохион байгуулалттайгаар үйл ажиллагаа явуулахаар үүсгэн байгуулагдсан.
                        </p>
                        <p className="pt-10 pb-5  leading-8 text-[20px] text-[#57667E] font-semibold">
                            Группын үндсэн чиг үүрэг нь охин компаниудаа нэгдмэл удирдлага, бодлого зохицуулалтаар ханган ажиллах бөгөөд одоогоор 32 компанид хөрөнгө оруулалт хийн, ажиллаж байна.
                        </p>
                    </div>
                    <div className="mt-[150px]">
                        <h1 className="text-[#ff3b30] text-[18px] font-medium pb-8">ХҮНИЙ НӨӨЦИЙН БОДЛОГО</h1>
                        <h3 className="text-[#233D63] text-[48px] leading-[60px]">ХҮНИЙ НӨӨЦИЙН <br /> БОДЛОГО, СТРАТЕГИ</h3>
                        <p className="pt-10 pb-5  leading-8 text-[20px] text-[#57667E] font-semibold">
                            Зөв хүн, технологийн Зөв шийдлээр, Зөв ирээдүйг бүтээцгээе” уриан дор хамт олон, ажилчдадаа чиглэсэн цогц бодлогыг хэрэгжүүлдэг бөгөөд ажилтнуудынхаа нийгэм, эдийн засгийн асуудлыг шийдвэрлэх, шинэлэг санааг дэмжих, мэргэжил чадварыг дээшлүүлэхэд онцгой анхаарал хандуулдаг.
                        </p>
                        <button className="text-white text-[18px] font-bold bg-[#ff3b30]  px-10 py-3  mr-10 mt-5 border rounded-full myShadow hover:border-red-400 hover:bg-white hover:text-[#ff3b30] hover:shadow-none transition duration-500 ease-in-out">
                            Дэлгэрэнгүй
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutReal
