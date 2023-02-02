import React from 'react';
import DashboardLayout from "../../Layout/Dashboard";
import UserStatistics from "components/HomePage/UserStatistics";

const Dashboard = () => {
    return (

        <DashboardLayout roles={["ADMIN", "CUSTOMER"]}>

            <h1 className="route-title">Dashboard</h1>
            <UserStatistics isShowTitle={false} />

        </DashboardLayout>


    );
};

export default Dashboard;