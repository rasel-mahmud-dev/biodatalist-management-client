import React from 'react';
import DashboardLayout from "../../layout/Dashboard";
import UserStatistics from "components/HomePage/UserStatistics";
import withAuth from "../../hoc/withAuth";


const Index = () => {
    return (
        <DashboardLayout>
            <h1 className="route-title">Admin Dashboard</h1>
            <UserStatistics isShowTitle={false} />
        </DashboardLayout>
    );
};

export default withAuth(["ADMIN"])(Index)