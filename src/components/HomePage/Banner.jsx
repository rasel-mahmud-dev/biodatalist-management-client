import React from 'react';
import HomeSearchBioDataForm from "components/HomePage/HomeSearchBioDataForm";

const Banner = () => {
    return (
        <>
            <div className="container">
                <div className="absolute left-1/2 -translate-x-1/2 transform top-1/2 -translate-y-1/2">
                    <h1 className="text-7xl text-white font-bold text-center leading-snug">Bangladeshi Islamic
                        Matrimony</h1>
                    <p className="text-xl text-white text-center mt-10">
                        It is now easy to find a religious life partner in your own upazila
                    </p>
                </div>
            </div>
            <HomeSearchBioDataForm className="banner-filter-form "/>
        </>
    );
};

export default Banner;