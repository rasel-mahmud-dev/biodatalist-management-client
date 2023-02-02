import React from 'react';
import DashboardLayout from "../../Layout/Dashboard";

const Index = () => {
    return (
        <DashboardLayout roles={["ADMIN"]}>

            <h1 className="route-title">Admin Dashboard</h1>
            
        </DashboardLayout>
    );
};

export default Index;