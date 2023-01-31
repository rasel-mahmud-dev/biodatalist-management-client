import React from 'react';
import FilterBiodataSidebar from "components/FilterBiodataSidebar/FilterBiodataSidebar";
import {useSelector} from "react-redux";

const Biodata = () => {

    const appState  = useSelector(state=>state.appState)

    return (
        <div>

            <FilterBiodataSidebar isOpen={appState.isOpenSidebar} />

           sdklfjsdklfjsdklfj
        </div>
    );
};

export default Biodata;