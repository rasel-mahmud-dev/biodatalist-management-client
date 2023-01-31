import React, {useEffect} from 'react';
import DashboardSidebar from "components/Dashboard/Sidebar";
import {useDispatch} from "react-redux";
import {fetchAuthBiodataAction} from "../store/actions/biodataAction";

const DashboardLayout = ({containerClass="", children}) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchAuthBiodataAction())
    }, [])


    return (
        <div className="flex">
            <DashboardSidebar/>
            <div className={`container ${containerClass}`}>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;