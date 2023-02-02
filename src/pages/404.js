import React from 'react';
import Button from "components/Button";

const NotFound = ({statusCode}) => {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold md:text-7xl text-red-500">404</h1>
            <h1 className="text-4xl font-bold md:text-7xl">Your are wrong path</h1>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
            <Button variant="outline" className="mt-10">Go To Homepage</Button>
        </div>
    );
};

NotFound.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}


export default NotFound;