import React from 'react';
import {BounceLoader } from "react-spinners";

const Loader = ({title, titleClass="", className="", ...loaderProps}) => {
    return (
        <div className={`loader-root ${className}`}>
            <div className="flex flex-col justify-center items-center">
                <BounceLoader color="#0070f3" {...loaderProps} />
                {title && <h1 className={`text-center ${titleClass}`}>{title}</h1>}
            </div>
        </div>
    );
};

export default Loader;