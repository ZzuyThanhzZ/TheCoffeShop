import React from 'react';
//images
import Grinder from '../../images/coffegrinder.png';
import ArrowRight from '../../images/arrowright.png';
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/instagram.png';
import Twitter from '../../images/twitter.png';
import ArrowSmall from '../../images/arrowsmall.svg';

const HeadingContent: React.FC = () => {
    
    return (
        <div className="
            flex
            justify-center 
            md:justify-center
            py-[130px]
            md:py-[10px]
            md:px-[50px] 
            lg:px-[88px] 
            xl:px-[120px]
            2xl:px-0 2xl:mx-auto">
            <div className="flex items-center 2xl:mr-[245px]">
                <div className="text-center md:text-left">
                    <h4 className="text-[19px] lg:text-[28px] font-cedarville text-darkGray">Drink coffee, enjoy with Samwyle</h4>
                    <h1 className="mt-3 mb-[30px] lg:my-[26px] text-[54px] lg:text-5xl xl:text-[63px] font-bold">Coffee Shop</h1>
                    <a 
                        href="#" 
                        className="
                            bg-primaryGreen text-white text-center text-xl rounded-md
                            flex justify-between mx-auto w-[190px] py-4 px-5
                            lg:block md:mx-0 md:w-[235px] md:py-[15px]"
                    >
                        Order here
                        <img className="text-white lg:hidden" src={ArrowSmall} alt="arrow" />
                    </a>
                </div>
            </div>

            <div className="hidden md:flex items-end">
                <div className="hidden lg:flex justify-center items-center lg:w-[80px] lg:h-[80px] xl:w-[160px] xl:h-[160px] bg-lightGray">
                    <img src={ArrowRight} alt="arrow" />
                </div>

                <div className="relative md:w-[350px] md:h-96 xl:w-[410px] xl:h-[466px] bg-lightGreen">
                    <img 
                        className="absolute
                            md:w-72 md:bottom-[-30px] md:left-5
                            xl:w-auto xl:bottom-[-47px] xl:left-7" 
                        src={Grinder} 
                        alt="grinder" 
                    />
                </div>

                <div className="md:ml-4 lg:ml-10 w-8 whitespace-nowrap">
                    <div>
                        <img src={Twitter} alt="twitter-icon" />
                        <img className="my-[14px]" src={Instagram} alt="instagram-icon" />
                        <img src={Facebook} alt="facebook-icon" />
                    </div>
                    <div className="block -rotate-90 h-8 mt-[104px] mr-1.5 mb-[-4px]">
                        <h3 className="text-[28px] text-darkGray">Follow us</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingContent;