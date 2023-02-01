import React from 'react';
import Sidebar from "components/Sidebar";
import Link from "next/link";
import Avatar from "components/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from "../../store/slices/appSlice";
import Button from "components/Button";
import {logoutAction} from "../../store/slices/authSlice";

const DashboardSidebar = ({isOpen}) => {

    const {auth, biodata} = useSelector(state => state.authState)

    function handleLogout() {
        dispatch(logoutAction())
    }

    const dispatch = useDispatch()

    const sidebarItems = [
        {label: "Dashboard", icon: "/icons/dashborad-ico.svg", href: "/admin", roles: ["ADMIN"]},
        {label: "Dashboard", icon: "/icons/dashborad-ico.svg", href: "/user/dashboard", roles: ["CUSTOMER"]},
        {
            label: "Edit Biodata",
            icon: "/icons/editbiodata-ico.svg",
            href: "/user/edit-biodata",
            roles: ["ADMIN", "CUSTOMER"]
        },
        {label: "Short list", icon: "/icons/shortlist-ico.svg", href: "", roles: ["CUSTOMER"]},
        {label: "Users list", icon: "/icons/shortlist-ico.svg", href: "/admin/users", roles: ["ADMIN"]},
        {label: "All BioData", icon: "/icons/shortlist-ico.svg", href: "/admin/all-biodata", roles: ["ADMIN"]},
        {label: "Ignore list", icon: "/icons/ignorelist-ico.svg", href: "", roles: ["CUSTOMER"]},
        {label: "My purchased", icon: "/icons/mypurchased-ico.svg", href: "", roles: ["CUSTOMER"]},
        {label: "Support & Report", icon: "/icons/support-ico.svg", href: "", roles: ["CUSTOMER"]},
        {label: "Settings", icon: "/icons/settings-ico.svg", href: "", roles: ["ADMIN", "CUSTOMER"]},
        {
            label: "Log out",
            icon: "/icons/logout-ico.svg",
            href: "",
            onClick: handleLogout,
            roles: ["ADMIN", "CUSTOMER"]
        },
    ]


    return (

        <Sidebar onClose={() => dispatch(toggleSidebar())} isOpen={isOpen}>

            {auth && (
                <div className="flex flex-col justify-center items-center py-10">
                    <Avatar className="w-24 h-24" imgClass="w-24 h-24 text-3xl" src={auth.avatar}
                            username={auth.username}/>
                    <h2>{auth.username}</h2>

                    <h3 className="mt-2  font-medium text-gray-500">Biodata Status</h3>
                    <div
                        className="bg-gray-200 py-1 px-4 text-sm rounded-md mt-1">{biodata && biodata.isCompleted ? "Completed" : "Incompleted"}</div>

                    <Link href="/user/mybio"><Button className="mt-4">My Bio Data</Button></Link>

                </div>
            )}


            <ul>
                {sidebarItems.map(item => item.roles.includes(auth?.role) && (
                    <li key={item.label}>
                        <Link href={item.href} onClick={item.onClick && item.onClick} className="sidebar-item">
                            <img className="w-4" src={item.icon} alt=""/>
                            <p>{item.label}</p>
                        </Link>
                    </li>
                ))}
            </ul>

        </Sidebar>

    );
};

export default DashboardSidebar;