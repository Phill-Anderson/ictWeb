import React from 'react'
import NextImage from 'next/image'
import HeaderLogo from 'public/images/header/Logo@2x.png'
import ICTLogo from 'public/images/header/ictgroup-logo-grey.png'
import TradeLogo from 'public/images/header/trademn-logo-grey.png'
const Header = () => {
    return (
        <div className="wrapper">
            <div className="pb-4">
                <NextImage src={HeaderLogo} width="124" height="36" />
            </div>
            <div className="px-6 w-[375px] bg-[#FBFBFF] border border-[#E9E9E9] rounded">
                <p className="text-[15px] text-[#FF605E] font-bold leading-8">
                    The first security token offering in Mongolia
                </p>
            </div>
            <h1 className="text-[62px] font-bold myBlue leading-[72px] pt-[25px] px-0 pb-[35px] tracking-tight">
                Монголын анхны <br /> хувьцаагаар баталгаажсан <br /> токен
            </h1>
            <div className="flex">
                <button className="text-white text-[18px] font-bold bg-[#ff3b30] px-10 py-3 mr-10 border rounded-full myShadow hover:bg-white hover:text-[#ff3b30] hover:shadow-none transition duration-500 ease-in-out">Whitepaper үзэх</button>
                <button className="text-white text-[18px] font-bold bg-[#ff3b30] px-10 py-3 mr-10 border rounded-full myShadow hover:bg-white hover:text-[#ff3b30] hover:shadow-none transition duration-500 ease-in-out">Whitepaper English</button>
            </div>
            <div className='flex mt-20 mb-10'>
                <div className="mr-10">
                    <NextImage src={ICTLogo} />
                </div>
                <div className="">
                    <NextImage src={TradeLogo} />
                </div>
            </div>
            <p className="myBlue text-lg font-bold leading-7">Лавлах утас: 75097070</p>

            <h1>Захиалгын хугацаа дууссан</h1>
            <div>%</div>
            <div>
                <span>НИЙТ ЗАХИАЛСАН ТОО ХЭМЖЭЭ</span><span>НИЙТ ЗАХИАЛГА АВАХ ТОО ХЭМЖЭЭ</span>
                <p>Мэдээллийн технологийн хурдацтай хөгжил, дэвшилтэй уялдаатайгаар үнэт цаасыг токенжуулж хөрөнгө босгох нь уламжлалт хэлбэрээр үнэт цаасыг олон нийтэд санал болгох үйл явцтай харьцуулбал цаг хугацаа, хөрөнгө мөнгө хэмнэхийн зэрэгцээ хөрөнгө оруулагч нарт тэгш боломж олгох зэрэг олон давуу талыг өөртөө агуулж буй тул манай компани нь дэлхий нийтийн чиг хандлагын дагуу токенжуулсан үнэт цаасыг хөрөнгө оруулагч нарт санал болгож байгаа болно.</p>
            </div>
            <h1>ICTG ТОКЕНИЙ ТОВЧ МЭДЭЭЛЭЛ</h1>
            <table>
                <tr>
                    <td>ТОКЕН НЭР:</td>
                    <td>ICT SECURITY TOKEN</td>
                </tr>
                <tr>
                    <td>ТОКЕНИЙ ТИККЕР:</td>
                    <td>ICTG</td>
                </tr>
                <tr>
                    <td>ҮРГЭЛЖЛЭХ ХУГАЦАА:</td>
                    <td>2021/05/24 11:00 - 2021/05/31 16:00</td>
                </tr>
                <tr>
                    <td>ТОКЕНИЙ ХЭЛБЭР:</td>
                    <td>SECURITY TOKEN</td>
                </tr>
                <tr>
                    <td>ТОКЕНИЙ СТАНДАРТ:</td>
                    <td>ETHEREUM ERC777</td>
                </tr>
                <tr>
                    <td>НИЙТ ТОКЕНИЙ ТОО ХЭМЖЭЭ:</td>
                    <td>1,428,600,000</td>
                </tr>
                <tr>
                    <td>ХӨРӨНГӨ ОРУУЛАГЧДАД САНАЛ БОЛГОХ ХУВЬ:</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>ХӨРӨНГӨ ОРУУЛАГЧДАД САНАЛ БОЛГОХ ТОО ХЭМЖЭЭ:</td>
                    <td>124,793,954</td>
                </tr>
                <tr>
                    <td>ТОКЕНИЙ НЭГЖ ҮНЭ:</td>
                    <td>130 ТӨГРӨГ</td>
                </tr>
                <tr>
                    <td>АРИЛЖААЛАХ БИРЖ:</td>
                    <td>WWW.TRADE.MN</td>
                </tr>
                <tr>
                    <td>ОЛБОРЛОЛТ:</td>
                    <td>ОЛБОРЛОХ БОЛОМЖГҮЙ</td>
                </tr>
                <tr>
                    <td>СМАРТ КОНТРАКТ АУДИТ:</td>
                    <td> CERTIK LLC</td>
                </tr>
            </table>

        </div>
    )
}

export default Header
