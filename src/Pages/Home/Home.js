import React from 'react';
import { Helmet } from 'react-helmet';
import About from './About/About';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Helmet><title>Photography Service Website</title></Helmet>
            <Slider></Slider>
            <Services></Services>
            <About></About>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;