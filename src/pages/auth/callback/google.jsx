import React, {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {fetchCurrentAuthAction} from "../../../store/actions/authAction";
import Loader from "components/Loader";



const Google = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const {token} = router.query

    useEffect(() => {
        if (token) {
            //remove old token
            localStorage.removeItem("token")

            // add new token, So that it send to server to check next request
            localStorage.setItem("token", token)
            dispatch(fetchCurrentAuthAction())
                .unwrap()
                .then(()=>{
                    router.push('/')
                })
                .catch(ex=>{
                    router.push('/auth/login')
            })
        } else{
            // token missing. so redirect again login page
            router.push('/auth/login')
        }
    }, [token])

    return (
        <div className="my-20">
            <Loader title="Please wait You are logged..." titleClass="text-sm font-medium" className="loader-center" />
        </div>
    );
};

export default Google;
