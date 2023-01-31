import React, {useEffect} from 'react';
import DashboardSidebar from "components/Dashboard/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthBiodataAction} from "../store/actions/biodataAction";

const DashboardLayout = ({containerClass="", children}) => {

    const dispatch = useDispatch()

    const appState = useSelector(state=>state.appState)

    useEffect(()=>{
        dispatch(fetchAuthBiodataAction())
    }, [])


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