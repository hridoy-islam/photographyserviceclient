import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const AddService = () => {

    const handleServicePost = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const photourl = form.photourl.value;
        const details = form.details.value;

        const service = { title, price, photourl, details };

        fetch(`https://metaial-server-hridoy-islam.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('service-token')}`
            },
            body: JSON.stringify(service),
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.acknowledged){
                    toast.success('Service Successfully created!');
                    form.reset();
                    
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div className='w-1/2 mx-auto py-10'>
            <Helmet><title>Add New Servive | Photography</title></Helmet>

            <h1 className='text-3xl my-5 font-bold text-center'>Add Service</h1>
            <form onSubmit={handleServicePost}>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="title"
                            value="Title"
                        />
                    </div>
                    <TextInput
                        id="title"
                        type="text"
                        required={true}
                        name='title'
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="price"
                            value="Price"
                        />
                    </div>
                    <TextInput
                        id="price"
                        type="text"
                        required={true}
                        name='price'
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photourl"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        id="photurl"
                        type="text"
                        required={true}
                        name='photourl'
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="details"
                            value="Details"
                        />
                    </div>
                    <Textarea
                        id="details"
                        type="texarea"
                        required={true}
                        name='details'
                    ></Textarea>
                </div>

                <Button type="submit" className='mt-2'>
                    Add Service
                </Button>
            </form>
        </div>
    );
};

export default AddService;