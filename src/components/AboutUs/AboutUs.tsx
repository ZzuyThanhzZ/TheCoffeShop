import React from 'react';
//images
import CoffeeCup from '../../images/coffecup1.png';

const AboutUs: React.FC = () => {

    return (
        <div className="
            mt-[70px] mb-24
            lg:ml-[88px] lg:mr-[88px] lg:flex lg:justify-between md:my-[190px] 2xl:justify-center 2xl:mx-auto"
        >
            <div className="relative min-w-[380px] bg-primaryPink
                h-[248px]
                lg:mr-[100px] lg:h-[287px]
                2xl:mr-[240px]"
            >
                <div>
                    <h4 className="hidden lg:block absolute left-[-46px] top-[18px] font-cedarville -rotate-90">About us</h4>
                </div>
                <div className="absolute 
                    left-[18px] top-[-21px]
                    sm:left-[25%] 
                    lg:left-7 lg:top-auto lg:bottom-[-54px] lg:right-[-13px]"
                >
                    <img src={CoffeeCup} alt="coffee-thumb" />
                </div>
            </div>

            <div className="mx-8 lg:mr-0 mt-[30px] lg:mt-0 lg:ml-0 lg:max-w-[645px]">
                <h2>Coffee Shop Samwayle</h2>
                <p className="font-alegreya my-[30px] lg:mt-[25px] lg:mb-[15px]">
                    Only one moment - when the barista reaches out over the bar to transfer the cup to the outstretched hand 
                    of the buyer. But this is exactly the moment when a connection arises between us and our guests. 
                </p>
                <p className="font-alegreya">
                    And we strive to do our best to maintain this connection - starting with our commitment to selecting the highest 
                    quality coffee in the world and ending with how we interact with guests and organizations to fulfill our obligations.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;