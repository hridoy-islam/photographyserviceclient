import { Card } from 'flowbite-react';
import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className='my-10'>
            <Helmet><title>Blog | Photography</title></Helmet>
            <h1 className='text-5xl font-semibold mb-8 text-center'>Blog</h1>

            <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10'>
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Difference between SQL and NoSQL
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        SQL is a Relational Database System ( RDBMS). NoSQL is Non-relational or distributed database system. When it comes to schema No sql has dynamic schema but SQL has fixed or static predefined schema. SQL is best for complex queries. But NoSQL not so good for complex queries.
                    </p>
                </Card>
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is JWT, and how does it work?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                    </p>
                </Card>
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is the difference between javascript and NodeJS?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </p>
                </Card>
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    How does NodeJS handle multiple requests at the same time?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Blog;