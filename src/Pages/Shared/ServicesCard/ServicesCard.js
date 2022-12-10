import { Card, Rating } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
    const { _id, title, price, photourl, details } = service;
    const sortedText = details.slice(0, 100)
    return (
        <div className="max-w-sm my-5">
            <PhotoProvider speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >

                <Card>
                    <PhotoView src={photourl}>
                        <img src={photourl} alt="" />
                    </PhotoView>
                    <Link>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </Link>
                    <div className="mt-2.5 mb-5 flex items-center">
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                        </Rating>

                    </div>
                    <div>
                        <p>{sortedText}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${price}
                        </span>
                        <Link to={`/services/${_id}`} className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            View Details
                        </Link>
                    </div>
                </Card>

            </PhotoProvider>
        </div >
    );
};

export default ServicesCard;