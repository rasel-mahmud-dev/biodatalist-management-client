import React from 'react';
import BiodateDetail from "components/BiodataDetail";
import {useFetchBiodataDetailQuery} from "../../store/services/bioDataApi";
import {useRouter} from "next/router";
import Backdrop from "components/Backdrop";
import Loader from "components/Loader";
import Avatar from "components/Avatar";
import ErrorMessage from "components/ErrorMessage";
import getErrorMessage from "../../utils/getErrorMessage";

const BiodataDetaiilPage = () => {

    const router = useRouter()
    const {biodataId} = router.query


    let {data, isLoading, isFetching, error} = useFetchBiodataDetailQuery(biodataId)


    return (
        <div className="container">

            {(isLoading || isFetching) ? <div>
                <Loader className="loader-center"/>
                {/**** backdrop overlay *****/}
                <Backdrop className="!#6666664d"/>
            </div> : error && <ErrorMessage message={getErrorMessage(error)}/>}

            {data && (<div>

                <div className="flex flex-col justify-center items-center py-10">
                    <Avatar className="w-24 h-24" imgClass="w-24 h-24 text-3xl" src={data?.user.avatar}
                            username={data?.user.username}/>
                    <h2 className="font-medium text-sm mt-3">{data?.user.email}</h2>
                    <h2 className="font-bold text-2xl">{data?.user.username}</h2>
                </div>

                <BiodateDetail biodata={data}/>
            </div>)}
        </div>
    );
};

export default BiodataDetaiilPage;