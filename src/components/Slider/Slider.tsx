import React from 'react';
//Images
import Arrow1 from '../../images/Arrow1.png';
import Arrow2 from '../../images/Arrow2.png';

const Slider: React.FC = () => {

    return (
        <div className="my-[50px] px-5 sm:px-[160px] xl:px-5 lg:bg-lightGray">
            <div className="xl:flex justify-center items-center flex-row-reverse py-12">
                <img className="hidden xl:block ml-[60px] cursor-pointer" src={Arrow2} alt="arrow-left" />
                <div className="rounded-3xl shadow-shadowSliderOp1 md:shadow-shadowSliderOp2">
                    <div className="p-11 text-center mx-auto">
                        <h3 className="text-[28px] font-semibold">Espresso</h3>
                        <p className="font-alegreya text-[#444A4A] w-[248px] h-[150px] mx-auto mt-8 mb-[100px]">Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.</p>
                        <a 
                            href="#" 
                            className="
                                bg-primaryGreen text-white text-center text-xl rounded-md px-5 mx-auto
                                block w-[243px] py-[15px]"
                        >
                            Order now
                        </a>
                    </div>
                </div>

                <div className="rounded-3xl shadow-shadowSliderOp2 my-[30px] xl:my-0 xl:mx-[30px]">
                    <div className="p-11 text-center mx-auto">
                        <h3 className="text-[28px] font-semibold">Latte</h3>
                        <p className="font-alegreya text-[#444A4A] w-[220px] h-[150px] mx-auto mt-8 mb-[100px]">The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.</p>
                        <a 
                            href="#" 
                            className="
                                bg-primaryGreen text-white text-center text-xl rounded-md px-5 mx-auto
                                block w-[243px] py-[15px]"
                        >
                            Order now
                        </a>
                    </div>
                </div>

                <div className="rounded-3xl shadow-shadowSliderOp2">
                    <div className="p-11 text-center mx-auto">
                        <h3 className="text-[28px] font-semibold">Americano</h3>
                        <p className="font-alegreya text-[#444A4A] w-[248px] h-[216px] mx-auto mt-8 mb-9">The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.</p>
                        <a 
                            href="#" 
                            className="
                                bg-primaryGreen text-white text-center text-xl rounded-md px-5 mx-auto
                                block w-[243px] py-[15px]"
                        >
                            Order now
                        </a>
                    </div>
                </div>
                <img className="hidden xl:block mr-[60px] cursor-pointer" src={Arrow1} alt="arrow-right" />
            </div>
        </div>
    )
}

export default Slider;