import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import './Slider.css'

const sliderBanner1 = {
    backgroundImage : `url(https://templates.hibootstrap.com/povi/default/assets/img/hero/hero-bg-1.jpg)`,
}
const sliderBanner2 = {
    backgroundImage : `url(https://templates.hibootstrap.com/povi/default/assets/img/cta-bg-1.jpg)`,
}






const Slider = () => {
    return (
        <div className="container mx-auto h-96 sm:h-64 xl:h-96 2xl:h-96 text-white">
            <Carousel>
                <div className='py-20 px-20 sliderBanner' style={sliderBanner1}>
                    <p className='text-lg font-bold text-blue-700'>Professional Photographer</p>
                    <h1 className='text-6xl'>Brayden Javion</h1>
                    <p className='text-lg my-5 w-2/3'>It is a long established fact that a reader will be distracted by the reale he point of using Lorem Ipsum is that it has a more-or-less normal valid equity.</p>
                    <Button className='my-5'>See All Our Services</Button>
                </div>

                <div className='py-20 px-20 sliderBanner' style={sliderBanner2}>
                    <p className='text-lg font-bold text-blue-700'>Professional Photographer</p>
                    <h1 className='text-6xl'>Brayden Javion</h1>
                    <p className='text-lg my-5 w-2/3'>It is a long established fact that a reader will be distracted by the reale he point of using Lorem Ipsum is that it has a more-or-less normal valid equity.</p>
                    <Button className='my-5'>See All Our Services</Button>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;