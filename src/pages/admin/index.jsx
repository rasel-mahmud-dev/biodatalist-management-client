import React from 'react';
import DashboardLayout from "../../Layout/Dashboard";
import UserStatistics from "components/HomePage/UserStatistics";

const Index = () => {
    return (
        <DashboardLayout roles={["ADMIN"]}>

            <h1 className="route-title">Admin Dashboard</h1>
            <UserStatistics isShowTitle={false} />
            
        </DashboardLayout>
    );
};

export default Index;