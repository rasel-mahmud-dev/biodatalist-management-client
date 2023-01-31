import React from 'react';
import DashboardSidebar from "components/Dashboard/Sidebar";

const DashboardLayout = ({containerClass="", children}) => {
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