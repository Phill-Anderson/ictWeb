import React from 'react'
import NextImage from 'next/image'
import HeaderLogo from 'public/images/header/Logo@2x.png'
import ICTLogo from 'public/images/header/ictgroup-logo-grey.png'
import TradeLogo from 'public/images/header/trademn-logo-grey.png'
const Header = ({ element }) => {
    return (
        <div ref={element} id="header" className="wrapper page-section" data-matching-link="#header-link">
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
                <button className="text-white text-[18px] font-bold bg-[#ff3b30] px-10 py-3 mr-10 border rounded-full myShadow hover:bg-white hover:border-red-400 hover:text-[#ff3b30] hover:shadow-none transition duration-500 ease-in-out">Whitepaper үзэх</button>
                <button className="text-white text-[18px] font-bold bg-[#ff3b30] px-10 py-3 mr-10 border rounded-full myShadow hover:bg-white hover:border-red-400 hover:text-[#ff3b30] hover:shadow-none transition duration-500 ease-in-out">Whitepaper English</button>
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

            <h1 className="myBlue text-[30px] text-center font-bold pt-60 pb-10">Захиалгын хугацаа дууссан</h1>
            <div className="bg-[#e9ecef] w-[100%] rounded-md"><span className="text-white bg-[#FE5D19] rounded-md">%</span></div>
            <div className="pt-5">
                <div className="flex justify-between">
                    <div className="text-[#57667E] font-bold">
                        <span className="leading-7">НИЙТ ЗАХИАЛСАН ТОО ХЭМЖЭЭ</span>
                    </div>
                    <div className="text-[#57667E] font-bold">
                        <span className="leading-7">НИЙТ ЗАХИАЛГА АВАХ ТОО ХЭМЖЭЭ</span><br />
                        <span className="text-[30px]">124,793,954 ICTG</span><br />
                        <span className="text-[22px]">16,223,214,020 MNT</span>
                    </div>
                </div>
                <p className="text-[17px] text-[#57667E] text-center py-10 font-bold">Мэдээллийн технологийн хурдацтай хөгжил, дэвшилтэй уялдаатайгаар үнэт цаасыг токенжуулж хөрөнгө босгох нь уламжлалт хэлбэрээр үнэт цаасыг олон нийтэд санал болгох үйл явцтай харьцуулбал цаг хугацаа, хөрөнгө мөнгө хэмнэхийн зэрэгцээ хөрөнгө оруулагч нарт тэгш боломж олгох зэрэг олон давуу талыг өөртөө агуулж буй тул манай компани нь дэлхий нийтийн чиг хандлагын дагуу токенжуулсан үнэт цаасыг хөрөнгө оруулагч нарт санал болгож байгаа болно.</p>
            </div>
            <h1 className="myBlue text-[30px] text-center font-bold mb-10">ICTG ТОКЕНИЙ ТОВЧ МЭДЭЭЛЭЛ</h1>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <tbody className="text-[#57667E] text-[17px] font-bold">
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ТОКЕН НЭР:</td>
                            <td className="py-2 px-4 text-right">ICT SECURITY TOKEN</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ТОКЕНИЙ ТИККЕР:</td>
                            <td className="py-2 px-4 text-right">ICTG</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ҮРГЭЛЖЛЭХ ХУГАЦАА:</td>
                            <td className="py-2 px-4 text-right">2021/05/24 11:00 - 2021/05/31 16:00</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ТОКЕНИЙ ХЭЛБЭР:</td>
                            <td className="py-2 px-4 text-right">SECURITY TOKEN</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ТОКЕНИЙ СТАНДАРТ:</td>
                            <td className="py-2 px-4 text-right">ETHEREUM ERC777</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">НИЙТ ТОКЕНИЙ ТОО ХЭМЖЭЭ:</td>
                            <td className="py-2 px-4 text-right">1,428,600,000</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ХӨРӨНГӨ ОРУУЛАГЧДАД САНАЛ БОЛГОХ ХУВЬ:</td>
                            <td className="py-2 px-4 text-right">10%</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ХӨРӨНГӨ ОРУУЛАГЧДАД САНАЛ БОЛГОХ ТОО ХЭМЖЭЭ:</td>
                            <td className="py-2 px-4 text-right">124,793,954</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ТОКЕНИЙ НЭГЖ ҮНЭ:</td>
                            <td className="py-2 px-4 text-right">130 ТӨГРӨГ</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">АРИЛЖААЛАХ БИРЖ:</td>
                            <td className="py-2 px-4 text-right">WWW.TRADE.MN</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">ОЛБОРЛОЛТ:</td>
                            <td className="py-2 px-4 text-right">ОЛБОРЛОХ БОЛОМЖГҮЙ</td>
                        </tr>
                        <tr className=" border border-gray-300 hover:bg-gray-100">
                            <td className="py-2 px-10 border-r border-gray-300">СМАРТ КОНТРАКТ АУДИТ:</td>
                            <td className="py-2 px-4 text-right"> CERTIK LLC</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Header
