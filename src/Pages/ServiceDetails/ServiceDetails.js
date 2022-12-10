import { Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import { userContext } from '../../Contexts/AuthContext';
import AddReview from '../Shared/AddReview/AddReview';
import ReviewCard from '../Shared/ReviewCard/ReviewCard';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(userContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://metaial-server-hridoy-islam.vercel.app/reviews/${service._id}`)
            .then((response) => response.json())
            .then((data) => {
                setReviews(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [service._id]);

    return (
        <div className='container mx-auto py-10 w-2/3'>
            <Helmet><title>{service.title} | Photography</title></Helmet>
            <Card>
                <img className='h-60 w-60 rounded' src={service.photourl} alt="" />
                <h5 className="text-2xl font-bold my-5 tracking-tight text-gray-900">
                    {service.title}
                </h5>
                <h4 className="text-2xl font-bold my-5 tracking-tight text-gray-900">
                    ${service.price}
                </h4>

                <p className="font-normal text-gray-700 text-lg">
                    {service.details}
                </p>
                </Card>
                

                <Card className='mt-5'>
                <h2 className="text-2xl font-bold my-5 tracking-tight text-gray-900">Reviews</h2>
                    {reviews.map(review => <ReviewCard key={review._id} data={review}></ReviewCard>)}

                    {
                        user ? <AddReview service={service}></AddReview> : <Button><Link to="/login" >Please login to add a review.</Link></Button>
                    }

                </Card>


        </div>
    );
};

export default ServiceDetails;