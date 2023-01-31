import React, {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {fetchCurrentAuthAction} from "../../../store/actions/authAction";



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
        }
    }, [token])

    return (
        <div className="my-20">
            <h1>Please wait...</h1>
        </div>
    );
};

export default Google;
