import React from 'react';
import FilterBiodataSidebar from "components/FilterBiodataSidebar/FilterBiodataSidebar";
import {useSelector} from "react-redux";

const Biodata = () => {

    const appState  = useSelector(state=>state.appState)

    return (
        <div className="flex">

            <FilterBiodataSidebar isOpen={appState.isOpenSidebar} />
            <div className="w-full">
                <div className="container">
                <div className="route-title">Filter Biodata</div>
            </div>

            </div>

        </div>
    );
};

export default Biodata;