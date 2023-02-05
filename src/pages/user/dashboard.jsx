import React from 'react';
import DashboardLayout from "../../layout/Dashboard";
import UserStatistics from "components/HomePage/UserStatistics";
import withAuth from "../../hoc/withAuth";

const Dashboard = () => {
    return (

        <DashboardLayout>
            <h1 className="route-title">User Dashboard</h1>
            <UserStatistics isShowTitle={false} />

        </DashboardLayout>


    );
};

export default withAuth(["ADMIN", "CUSTOMER"])(Dashboard);