import React from 'react';
import Sidebar from "components/Sidebar";
import Link from "next/link";
import Avatar from "components/Avatar";
import {useSelector} from "react-redux";

const DashboardSidebar = () => {

    const {auth, biodata} = useSelector(state => state.authState)

    function handleLogout() {
        alert("asd")
    }

    const sidebarItems = [
        {label: "Dashboard", icon: "/icons/dashborad-ico.svg", href: "/user/dashboard"},
        {label: "Edit Biodata", icon: "/icons/editbiodata-ico.svg", href: ""},
        {label: "Short list", icon: "/icons/shortlist-ico.svg", href: ""},
        {label: "Ignore list", icon: "/icons/ignorelist-ico.svg", href: ""},
        {label: "My purchased", icon: "/icons/mypurchased-ico.svg", href: ""},
        {label: "Support & Report", icon: "/icons/support-ico.svg", href: ""},
        {label: "Settings", icon: "/icons/settings-ico.svg", href: ""},
        {label: "Log out", icon: "/icons/logout-ico.svg", href: "", onClick: handleLogout},
    ]


    return (
        <div>
            <Sidebar className="">

                {auth && (<div className="flex flex-col justify-center items-center py-10">
                    <Avatar className="w-24 h-24" imgClass="w-24 h-24 text-3xl" src={auth.avatar} username={auth.username}/>
                    <h2>{auth.username}</h2>

                    <h3 className="mt-2">Biodata Status</h3>
                    <div className="bg-gray-200 py-2 px-4 rounded-md mt-1">{biodata ? "Completed" : "Incompleted"}</div>
                </div>)}


                <ul>
                    {sidebarItems.map(item => (
                        <li>
                            <Link href={item.href} onClick={item.onClick && item.onClick} className="sidebar-item">
                                <img className="w-4" src={item.icon} alt=""/>
                                <p>{item.label}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

            </Sidebar>
        </div>
    );
};

export default DashboardSidebar;