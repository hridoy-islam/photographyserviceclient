import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { userContext } from '../../Contexts/AuthContext';

const provider = new GoogleAuthProvider();

const Register = () => {
    const { registerWithEmail, googleLogin, setUser, profileUpdate } = useContext(userContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, email, password)

        registerWithEmail(email, password)
            .then(result => {
                const user = result.user;
                const data = {displayName: name}
                profileUpdate(data)
                .then(()=> {
                    setUser(user);
                    toast.success('Registration Completed Sucessfully!');
                })
                .catch(error => console.log(error))
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }


    const handleGoogleRegister = () => {
        googleLogin(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setUser(user);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }



    return (
        <div className="max-w-sm mx-auto my-10">
            <Helmet><title>Register | Photography Service</title></Helmet>
            <Card>
                <h3 className='text-lg font-bold'>Register</h3>
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            required={true}
                            name="name"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@flowbite.com"
                            required={true}
                            name="email"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            required={true}
                            name='password'
                        />
                    </div>

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <Button onClick={handleGoogleRegister} type="submit" color="gray" className='border-slate-800'
                    pill={true}>
                    <FcGoogle className='text-lg mr-2'></FcGoogle> Google
                </Button>

                <p>Already Have Account? <Link className='text-blue-600' to='/login'>Please Login</Link></p>
            </Card>
        </div>
    );
};

export default Register;