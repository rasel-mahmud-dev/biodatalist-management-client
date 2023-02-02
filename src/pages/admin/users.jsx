import React from 'react';
import {useGetUsersQuery} from "../../store/services/usersApi";
import DashboardLayout from "../../Layout/Dashboard";
import Avatar from "components/Avatar";

const Users = () => {

    const {data: users} = useGetUsersQuery()

    return (
        <DashboardLayout roles={["ADMIN"]}>

            <h1 className="route-title">Users List</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {users && users.map(user=>(
                    <div className="card flex flex-col items-center">
                        <Avatar src={user.avatar} username={user.username} />
                        <h4 className="text-sm font-medium mt-2">{user.username}</h4>
                        <h4 className="text-sm text-gray-900">{user.email}</h4>
                        <p className="text-xs mt-2 text-gray-400">Join On {new Date(user?.createdAt).toDateString()}</p>
                    </div>
                ))}
            </div>

        </DashboardLayout>
    );
};

export default Users;