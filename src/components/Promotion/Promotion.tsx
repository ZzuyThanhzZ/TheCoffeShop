import React from 'react';
//images
import CoffeeCup from '../../images/coffeecup2.svg';

const Promotion: React.FC = () => {

    return (
        <div className="flex-row-reverse my-[50px]
            md:my-[150px]
            lg:ml-[120px] lg:mr-[120px] xl:mr-48 lg:flex lg:justify-between 2xl:justify-center 2xl:mx-auto"
        >
            
            <div className="flex lg:items-start xl:items-end xl:ml-[120px]">
                <div className="relative bg-lightGreen w-full h-[287px] lg:w-[410px] lg:h-[276px]">
                    <div className="">
                        <div>
                            <h4 className="hidden lg:block absolute right-[-50px] top-[18px] font-cedarville -rotate-90">Promotion</h4>
                        </div>
                        <div className="absolute left-[70px] top-[-16px] sm:left-[35%] lg:left-[72px] lg:top-[-30px]">
                            <img src={CoffeeCup} alt="coffee-thumb" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-8 mt-[30px] lg:mt-0 lg:ml-0 lg:max-w-[615px] 2xl:mr-[150px]">
                <h2 className="text-4xl lg:text-[38px]">Coffee of the day</h2>
                <p className="font-alegreya my-[30px] lg:my-[25px]">
                Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream) depends on how coffee and water are mixed.
                Attention! The concepts of “American” and “American coffee” should not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a filter system. 
                </p>
                <a 
                    href="#" 
                    className="
                        hidden
                        bg-primaryGreen text-white text-center text-xl rounded-md px-5
                        lg:block md:mx-0 md:w-[235px] md:py-[15px]"
                    >
                        Order now
                </a>
            </div>

        </div>
    )
}

export default Promotion;