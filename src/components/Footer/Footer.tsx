import React from 'react';
//images
import Map from '../../images/map.png';
import SmallMap from '../../images/smallMap.png';
import ArrowRight from '../../images/arrowright.png';

const Footer: React.FC = () => {

    return (
        <div>
            <div className="px-5">
                <div className="lg:flex justify-start sm:pl-3 lg:pl-[100px] md:pt-[80px] 2xl:mx-auto">
                    <div className="relative">
                        <img className="hidden sm:block mx-auto lg:w-[646px] lg:h-[351px]" src={Map} alt="map" />
                        <img className="mx-auto sm:hidden" src={SmallMap} alt="map" />
                        <h4 className="hidden sm:block absolute right-[-42px] top-[10px] -rotate-90 font-cedarville">Contacts</h4>
                    </div>
                        <div className="hidden lg:block border-b-2 border-solid w-[102px] h-[48px] border-[#444A4A] ml-[42px] mr-[32px]"></div>
                    <div className="mt-[30px] mb-[50px] mx-auto text-center lg:text-left lg:mr-[68px] xl:mx-0">
                        <h3 className="text-[32px] leading-10">Our address</h3>

                        <p className="font-alegreya md:mt-[21px] md:mb-[16px] text-lg text-[#444A4A] leading-10">110 St-Cathedral Pkwy Station</p>
                        <p className="font-alegreya my-[10px] md:my-0 text-lg text-[#444A4A] leading-10">4310 94th St, Flushing</p>
                        <p className="hidden xl:block font-alegreya my-4 text-lg text-[#444A4A] leading-10">94-54 Corona Ave., Elmhurst</p>
                        <p className="hidden xl:block font-alegreya text-lg text-[#444A4A] leading-10">5627 Van Doren St, Queens</p>

                        <button className="lg:hidden flex justify-center items-center rounded-md shadow-shadowFooterBtn py-4 px-[18px] mx-auto md:mt-5">
                            <span className="mr-4 text-[#444A4A]">See more address</span>
                            <img src={ArrowRight} alt="arrow-right" />
                        </button>
                    </div>
                </div>

                <div className="text-center lg:mt-[114px]">
                    <h3 className="text-[14px] leading-9 text-[#444A4A] font-light md:font-semibold md:text-[19px]">2020 (c) - Samwyle bandtitos</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;