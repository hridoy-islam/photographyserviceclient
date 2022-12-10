import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../Contexts/AuthContext';
import { Helmet } from 'react-helmet';

const provider = new GoogleAuthProvider();

const Login = () => {

    const { loginUser, googleLogin, setUser } = useContext(userContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

   

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);

                const loginUser = {
                    email: user.email
                }

                fetch(`https://metaial-server-hridoy-islam.vercel.app/jsonToken/`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('service-token', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });

    }

    const handleGoogleLogin = () => {
        googleLogin(provider)
            .then((result) => {
                const user = result.user;
                setUser(user);

                const loginUser = {
                    email: user.email
                }

                fetch(`https://metaial-server-hridoy-islam.vercel.app/jsonToken`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('service-token', data.token);
                        navigate(from, { replace: true });
                    });

            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    }


    return (
        <div className="max-w-sm mx-auto my-10">
            <Helmet>
                <title>Login | Photography Service</title>
            </Helmet>
            <Card>
                <h3 className='text-lg font-bold'>Login</h3>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                            name="password"
                        />
                    </div>

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <Button onClick={handleGoogleLogin} type="submit" color="gray" className='border-slate-800'
                    pill={true}>
                    <FcGoogle className='text-lg mr-2'></FcGoogle> Google
                </Button>

                <p>Don't Have Account? <Link className='text-blue-600' to='/register'>Please Register</Link></p>
            </Card>
        </div>
    );
};

export default Login;