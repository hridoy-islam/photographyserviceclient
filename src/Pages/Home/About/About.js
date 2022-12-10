import { Button } from 'flowbite-react';
import React from 'react';

const About = () => {
    return (
        <div className='bg-slate-200'>
            <div className='container mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10'>
                <div>
                    <img src='https://templates.hibootstrap.com/povi/default/assets/img/about/about-1.png' alt='' />
                </div>
                <div className='p-8'>
                    <h4 className='text-xl text-blue-600 font-bold'>ABOUT US</h4>
                    <h2 className='text-5xl font-semibold my-4'>We're The Leading Photo Studio In The Country</h2>
                    <p className='text-lg'>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar dolor strategic planning dolor sit sectetur. Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar dolor strategic planning dolor sit sectetur.Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar dolor strategic planning dolor sit sectetur.</p>
                    <Button className='mt-4'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default About;