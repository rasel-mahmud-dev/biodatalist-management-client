import React from 'react';
import FilterBiodataSidebar from "components/FilterBiodataSidebar/FilterBiodataSidebar";
import { useSelector} from "react-redux";
import Biodata from "components/Biodata";
import Backdrop from "components/Backdrop";
import Loader from "components/Loader";
import {bioDataApi, useGetFilterBioQuery, useUpdateFilterBioMutation} from "../../store/services/bioDataApi";


const BiodataFilterPage = () => {

    const {filterBiodata} = useSelector(state => state.biodataState)

    let {isLoading, isFetching} = useGetFilterBioQuery({})

    // lazy query // trigger when filter value changes
    const [trigger] = bioDataApi.endpoints.getFilterBio.useLazyQuery({})


    async function handleSearchBioData(data) {
        let filter = {}
        if (data.biodataNo) {
            filter.biodataNo = data.biodataNo
        }
        // trigger re-fetching with new filter payload
        trigger(filter)
    }


    return (
        <div className="flex">

            <FilterBiodataSidebar onSearchBioData={handleSearchBioData}/>

            <div className="w-full">
                <div className="container">

                    {(isLoading || isFetching) && <>
                        {/**** backdrop overlay *****/}
                        <div id="filter-overlay"></div>
                        <Backdrop backdropRoot="filter-overlay" className="fetch-bio-overlay"/>
                        <Loader/>
                    </>}


                    <div className="route-title">Filter Biodata</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filterBiodata && filterBiodata.map((biodata) => (
                            <Biodata biodata={biodata} key={biodata._id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiodataFilterPage;