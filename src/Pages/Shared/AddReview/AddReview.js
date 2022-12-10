import { Button, Label, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../Contexts/AuthContext';

const AddReview = ({service}) => {
    const navigate = useNavigate();
    const {user} = useContext(userContext)
    const {_id, title} = service
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const userid = user.uid;
        const name = user.displayName;

        const message = {
            review,
            userid,
            name,
            serviceId : _id,
            serviceName : title,
        }

        fetch(`https://metaial-server-hridoy-islam.vercel.app/addreview`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('service-token')}`
            },
            body: JSON.stringify(message),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Review Added Successfully!');
                    form.reset();
                    navigate('/myreviews');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2 className='font-bold text-lg mt-8'>Add Your Review</h2>
            <form onSubmit={handleReview} className="flex flex-col gap-4">

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="review" />
                    </div>
                    <Textarea
                        id="review"
                        type="textarea"
                        placeholder="Write Your Review"
                        required={true}
                        name="review"
                    />
                </div>

                <Button type="submit" className='w-1/4' pill={true}>
                    Add Review
                </Button>
            </form>
        </div>
    );
};

export default AddReview;