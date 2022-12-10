import { Button } from 'flowbite-react';
import React from 'react';
import {HiOutlineArrowRight} from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesCard from '../../Shared/ServicesCard/ServicesCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='py-10'>
            <h2 className='text-5xl font-semibold mb-8 text-center'>Services</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }      
            </div>
            <Link to='/services'> 
            <Button className='mx-auto my-6'
                color="purple"
                pill={true}
            >
            See All <HiOutlineArrowRight className="h-6 w-6 mx-3" />
            </Button>
            </Link>
        </div>
    );
};

export default Services;