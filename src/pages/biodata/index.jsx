import React, {useEffect} from 'react';
import FilterBiodataSidebar from "components/FilterBiodataSidebar/FilterBiodataSidebar";
import {useDispatch, useSelector} from "react-redux";
import Biodata from "components/Biodata";
import Backdrop from "components/Backdrop";
import Loader from "components/Loader";
import {bioDataApi, useGetFilterBioQuery} from "../../store/services/bioDataApi";
import Pagination from "components/Pagination";
import {changePagination, changeSort} from "../../store/slices/biodataSlice";
import Select from "components/Select";


const BiodataFilterPage = () => {

    const {filterBiodata, totalItems, filter, sort, pagination} = useSelector(state => state.biodataState)

    let {isLoading, isFetching} = useGetFilterBioQuery({})

    // lazy query // trigger when filter value changes
    const [trigger] = bioDataApi.endpoints.getFilterBio.useLazyQuery({})

    const dispatch   = useDispatch()


    // async function handleSearchBioData(data) {
    //     let filter = {}
    //     if (data.biodataNo) {
    //         filter.biodataNo = data.biodataNo
    //         filter.pageNumber = 1
    //     }
    //     // trigger re-fetching with new filter payload
    //     trigger(filter)
    // }


    // re-fetch bio data whenever change those values....
    useEffect(()=>{
        let payload = {}
        if (filter.biodataNo) {
            payload.biodataNo = filter.biodataNo
        }
        payload.pageNumber = pagination.currentPage
        payload.perPage = pagination.perPage

        if(sort.field){
            payload.sort = {
                field: sort.field,
                order: sort.order
            }
        }

        // trigger re-fetching with new filter payload
        trigger(payload)

    }, [
        filter.biodataNo,
        pagination.currentPage,
        pagination.perPage,
        sort.field,
        sort.order
    ])


    function handlePageChange(pageNumber){
        dispatch(changePagination({pageNumber}))
    }

    function handleSortOrder(e){
        let value =  e.target.value
        dispatch(changeSort({field: "createdAt", order: Number(value) }))
    }


    return (
        <div className="flex">

            <FilterBiodataSidebar/>

            <div className="w-full">
                <div className="container">

                    {(isLoading || isFetching) && <>
                        {/**** backdrop overlay *****/}
                        <div id="filter-overlay"></div>
                        <Backdrop backdropRoot="filter-overlay" className="fetch-bio-overlay"/>
                        <Loader/>
                    </>}


                    <div className="route-title flex items-center">
                        Filter Biodata
                        <div className="ml-4">({totalItems})</div>
                    </div>


                    <div className="flex justify-end">
                        <Select onChange={handleSortOrder}>
                            <option value="1">New</option>
                            <option value="-1">Old</option>
                        </Select>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
                        {filterBiodata && filterBiodata.map((biodata) => (
                            <Biodata biodata={biodata} key={biodata._id}/>
                        ))}
                    </div>


                    <div className="my-20">
                        <Pagination onChange={handlePageChange} perPage={pagination.perPage} pageNumber={pagination.currentPage} totalItem={totalItems}  />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default BiodataFilterPage;