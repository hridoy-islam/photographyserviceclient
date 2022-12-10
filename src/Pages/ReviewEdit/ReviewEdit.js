import { Button, Label, Textarea } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';


const ReviewEdit = () => {
    const navigate = useNavigate();
    const { review, _id } = useLoaderData();
    const updateReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;

        const message = {
            review,
        }
        fetch(`https://metaial-server-hridoy-islam.vercel.app/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('service-token')}`
            },
            body: JSON.stringify(message),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Review Updated Successfully!');
                    form.reset();
                    navigate('/myreviews');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div className='mx-auto w-2/3'>
            <h2 className='font-bold text-lg mt-8'>Update Your Review</h2>
            <form onSubmit={updateReview} className="flex flex-col gap-4">

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="review"  />
                    </div>
                    <Textarea
                        id="review"
                        type="textarea"
                        placeholder="Write Your Review"
                        required={true}
                        name="review">
                    {review}
                    </Textarea>
                </div>

                <Button type="submit" className='w-1/4' pill={true}>
                    Update Review
                </Button>
            </form>
        </div>
    );
};

export default ReviewEdit;