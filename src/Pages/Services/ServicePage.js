import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../Shared/ServicesCard/ServicesCard';

const ServicePage = () => {
    const services = useLoaderData();

    return (
        <div className='container mx-auto my-10'>
            <Helmet><title>Services | Photography</title></Helmet>
            <h1 className='text-5xl font-semibold mb-8 text-center'>All Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    services?.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
                
            </div>
        </div >
    );
};

export default ServicePage;