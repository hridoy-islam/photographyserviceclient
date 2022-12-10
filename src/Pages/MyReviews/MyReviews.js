import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { userContext } from '../../Contexts/AuthContext';

const MyReviews = () => {
    const { user } = useContext(userContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://metaial-server-hridoy-islam.vercel.app/reviews/?id=${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.uid])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://metaial-server-hridoy-islam.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('service-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review Deleted Successfully')
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

     

    return (
        <div className='py-10 w-3/4 mx-auto'>
            <Helmet><title>My Reviews | Photography Service</title></Helmet>
            <h1 className='text-3xl my-5 font-bold text-center'>My Reviews</h1>
            <p className='text-lg my-5 font-bold text-center'>You Have {reviews.length} reviews</p>

            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Service name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Review Message
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        reviews.map(review =>
                            <Table.Row key={review._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {review.serviceName}
                                </Table.Cell>

                                <Table.Cell>
                                    {review.review}
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to={`/myreviews/${review._id}`} className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Edit
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link onClick={() => handleDelete(review._id)} className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Delete
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        )
                    }

                </Table.Body>
            </Table>


        </div>
    );
};

export default MyReviews;