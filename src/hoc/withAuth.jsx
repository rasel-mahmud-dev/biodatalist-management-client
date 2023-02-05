import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthBiodataAction} from "../store/actions/biodataAction";
import Loader from "components/Loader";
import {useRouter} from "next/router";

const withAuth = (roles = []) => {
    return function (HocComponent) {
        return function () {
            const dispatch = useDispatch()

            const router = useRouter()

            const {authState} = useSelector(state => state)

            useEffect(() => {
                dispatch(fetchAuthBiodataAction())
            }, [])


            if (!authState.authLoaded) {
                return <Loader className="loader-center"/>
            } else if (!authState.auth) {
                router.push("/auth/login?redirect=" + router.asPath)
                return;
            } else if (roles && roles.length > 0 && !roles.includes(authState?.auth?.role)) {
                // route role based permission
                router.push("/")
                return
            }

            return <HocComponent/>

        }
    }
};

export default withAuth;

