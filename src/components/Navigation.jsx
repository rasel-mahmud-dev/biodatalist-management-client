import React, {useState} from 'react';
import Link from "next/link";
import Button from "components/Button";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "components/Avatar";
import Popup from "components/Popup";
import {MdDashboard} from "react-icons/md";
import {FaSignOutAlt} from "react-icons/fa";
import {logoutAction} from "../store/slices/authSlice";
import {HiBars4} from "react-icons/hi2";
import {toggleSidebar} from "../store/slices/appSlice";

const Navigation = () => {
    const {auth} = useSelector(state => state.authState)

    const dispatch = useDispatch()

    const [openAuthPopup, setOpenAuthPopup] = useState(false)


    function handleLogout() {
        dispatch(logoutAction())
    }

    const navItems = [
        {label: "Home", href: "/"},
        {label: "Biodata", href: "/biodata"},
        {label: "About us", href: "/"},
        {label: "Ask", href: "/"},
        {label: "Direction", href: "/"},
        {label: "Contact", href: "/"},
    ]


    function handleToggleSidebar(e){
        dispatch(toggleSidebar())
    }

    return (
        <div className="bg-white shadow-xl fixed top-0 left-0 w-full navigation">
            <header className="flex justify-between container mx-auto items-center">
                <div className="flex items-center justify-between gap-x-2">
                    <HiBars4 className="text-2xl cursor-pointer block lg:hidden" onClick={handleToggleSidebar}/>
                    <img className="w-14" src="/icons/bio.png" alt=""/>
                </div>
                <nav>
                    <ul className="flex items-center gap-x-6 py-4">
                        {navItems.map(item=>(
                            <li key={item.label} className="text-sm font-medium ">
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav>
                    <ul className="flex items-center gap-x-4 py-4">
                        <li>
                            {auth ? (
                                <div onClick={() => setOpenAuthPopup(!openAuthPopup)}
                                     onMouseLeave={() => setOpenAuthPopup(false)}
                                     onMouseEnter={() => setOpenAuthPopup(true)}
                                     className="relative">
                                    <Avatar username={auth.username} src={auth.avatar}/>
                                    <Popup isOpen={openAuthPopup} className="right-0 shadow-xl">
                                        <ul>
                                            <li className="flex items-center gap-x-2">
                                                <Avatar username={auth.username} className="h-8 w-8" imgClass="w-8 h-8"
                                                        src={auth.avatar}/>
                                                <h4>{auth.username}</h4>
                                            </li>
                                            <li className="flex items-center gap-x-2 mt-4 hover:text-white hover:bg-primary transition transition-colors px-2 py-1 rounded cursor-pointer">
                                                <MdDashboard/>
                                                <Link href={`/${auth.role === "ADMIN" ? "admin" : "user/dashboard"}`}>Dashboard</Link>
                                            </li>
                                            <li onClick={handleLogout}
                                                className="flex items-center gap-x-2 hover:text-white hover:bg-primary transition transition-colors px-2 py-1 rounded cursor-pointer">
                                                <FaSignOutAlt/>
                                                <span className="">Logout</span>
                                            </li>
                                        </ul>
                                    </Popup>

                                </div>
                            ) : (

                                <Button className="" variant="outline"><Link href="/auth/login">Login</Link></Button>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};


export default Navigation;