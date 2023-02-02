import React, {useEffect} from 'react';
import DashboardSidebar from "components/Dashboard/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthBiodataAction} from "../store/actions/biodataAction";
import Loader from "components/Loader";
import {useRouter} from "next/router";

const DashboardLayout = ({roles = [], containerClass="", children}) => {

    const dispatch = useDispatch()

    const router = useRouter()

    const {appState, authState} = useSelector(state=>state)

    useEffect(()=>{
        dispatch(fetchAuthBiodataAction())
    }, [])


    if(!authState.authLoaded){
        return <Loader className="loader-center" />
    } else if(!authState.auth){
        router.push("/auth/login?redirect="+router.asPath)
        return;
    } else if(roles && roles.length > 0 && !roles.includes(authState?.auth?.role)){
        // route role based permission
        router.push("/")
        return
    }


    return (
        <div className="flex">
            <DashboardSidebar isOpen={appState.isOpenSidebar}/>
            <div className="w-full">
                <div className={`container ${containerClass}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;