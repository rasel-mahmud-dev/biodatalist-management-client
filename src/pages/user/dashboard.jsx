import React from 'react';
import DashboardSidebar from "components/Dashboard/Sidebar";

const Dashboard = () => {
    return (

        <div className="flex">
            <DashboardSidebar/>
            <div>
                <div className="container">
                    <h1 className="section-title">
                        dashboard
                    </h1>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;