import React from 'react';
import Button from "components/Button";
import Link from "next/link";

const NotFound = (props) => {
    const {statusCode} = props


    return (
        <div className="text-center py-20">
            <h1 className="text-7xl font-bold md:text-9xl text-red-500">404</h1>
            <h1 className="text-4xl font-bold md:text-5xl py-4">Your are in wrong path</h1>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
            <Link href="/">
                <Button variant="outline" className="mt-10">Go To Homepage</Button>
            </Link>
        </div>
    );
};


export default NotFound;