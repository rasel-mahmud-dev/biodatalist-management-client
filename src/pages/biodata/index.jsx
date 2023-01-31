import React, {useEffect, useState} from 'react';
import FilterBiodataSidebar from "components/FilterBiodataSidebar/FilterBiodataSidebar";
import {useSelector} from "react-redux";
import apis from "../../apis";
import Biodata from "components/Biodata";

const BiodataFilterPage = () => {

    const appState = useSelector(state => state.appState)

    let [data, setData] = useState([])

    useEffect(() => {

        apis.post("/api/biodata/filter", {}).then((doc) => {
            setData(doc.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])


    function handleSearchBioData(data){
        let filter = {}
        if(data.biodataNo){
            filter.biodataNo = data.biodataNo
        }

        apis.post("/api/biodata/filter", filter).then((doc) => {
            setData(doc.data)
        }).catch(e => {
            console.log(e)
        })
    }


    return (
        <div className="flex">

            <FilterBiodataSidebar onSearchBioData={handleSearchBioData} isOpen={appState.isOpenSidebar}/>

            <div className="w-full">
                <div className="container">
                    <div className="route-title">Filter Biodata</div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {data && data.map((biodata) => (
                            <Biodata biodata={biodata} key={biodata._id}/>
                        ))}
                    </div>


                </div>


            </div>

        </div>
    );
};

export default BiodataFilterPage;