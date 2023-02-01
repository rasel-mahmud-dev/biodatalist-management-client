import React from 'react';

import DashboardLayout from "../../Layout/Dashboard";
import Avatar from "components/Avatar";
import {useFetchAllBioDataQuery} from "../../store/services/bioDataApi";
import calcAge from "../../utils/calcAge";


const AllBiodatas = () => {

    const {data: allBiodata} = useFetchAllBioDataQuery()

    return (
        <DashboardLayout>

            <h1 className="route-title">Biodata List</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allBiodata && allBiodata.map(bio=>(
                    <div className="card flex flex-col items-center" key={bio._id}>
                        <Avatar src={bio.user.avatar} username={bio.user.username} />
                        <h4 className="text-sm font-medium mt-2">{bio.occupation}</h4>
                        <h4 className="text-sm text-gray-900">{bio.biodataType === "male-biodata" ? "Male" : "Female"} Biodata</h4>
                        <p className="text-xs mt-2 text-gray-400">{calcAge(bio?.birthDay)}</p>
                    </div>
                ))}
            </div>

        </DashboardLayout>
    );
};

export default AllBiodatas;