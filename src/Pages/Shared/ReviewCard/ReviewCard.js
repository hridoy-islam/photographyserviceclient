import { Card, Rating } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
const ReviewCard = ({ data }) => {
    const { review, name, serviceName, serviceId } = data
    return (
        <Card className='my-4'>
            <div className="mx-auto text-center">
                <div className="flex items-center justify-center mt-2 space-x-3">
                    <h2 className='text-lg font-bol'><Link to={`/services/${serviceId}`} className="text-blue-600">{serviceName}</Link></h2>
                </div>
                <p className="text-lg font-medium text-gray-900 my-2">
                    {review}
                </p>
                <div className="flex items-center justify-center mt-2 space-x-3">
                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                    </Rating>
                </div>

                <div className="flex items-center justify-center mt-2 space-x-3">
                    <div className="pr-3 font-bold text-gray-900 dark:text-white">Reviewd By : {name}</div>
                </div>
                <div className="flex items-center justify-center mt-2 space-x-3">
                </div>
            </div>
           
        </Card>
    );
};

export default ReviewCard;