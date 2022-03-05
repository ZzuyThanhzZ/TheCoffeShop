import React from 'react';

//components
import HeadingContent from '../HeadingContent/HeadingContent';
import AboutUs from '../AboutUs/AboutUs';
import Promotion from '../Promotion/Promotion';
import Slider from '../Slider/Slider';

const Content: React.FC = () => {
    
    return (
        <div>
            <HeadingContent />
            <AboutUs />
            <Promotion />
            <Slider />
        </div>
    )
}

export default Content;