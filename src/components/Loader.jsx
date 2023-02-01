import React from 'react';
import {BounceLoader } from "react-spinners";

const Loader = ({className="", ...loaderProps}) => {
    return (
        <div className={`loader-root ${className}`}>
            <BounceLoader  color="#0070f3" {...loaderProps} />
        </div>
    );
};

export default Loader;