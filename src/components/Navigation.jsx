import React, {useState} from 'react';
import Link from "next/link";
import Button from "components/Button";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "components/Avatar";
import Popup from "components/Popup";
import {MdDashboard} from "react-icons/md";
import {FaSignOutAlt} from "react-icons/fa";
import {logoutAction} from "../store/slices/authSlice";

const Navigation = () => {
    const {auth} = useSelector(state=>state.authState)

    const dispatch = useDispatch()

    const [openAuthPopup, setOpenAuthPopup] = useState(false)


    function handleLogout(){
        dispatch(logoutAction())
    }

    return (
        <div className="bg-white shadow-xl">
            <header className="flex justify-between container mx-auto items-center">
                <div>
                    <img className="w-14" src="/icons/bio.png" alt=""/>
                    
                </div>
                <nav>
                    <ul className="flex items-center gap-x-4 py-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            {auth ? (
                                <div onClick={()=>setOpenAuthPopup(!openAuthPopup)}
                                     onMouseLeave={()=>setOpenAuthPopup(false)}
                                     onMouseEnter={()=>setOpenAuthPopup(true)}
                                     className="relative">
                                    <Avatar username={auth.username} src={auth.avatar} />
                                    <Popup isOpen={openAuthPopup} className="right-0 shadow-xl">
                                        <ul>
                                            <li className="flex items-center gap-x-2">
                                                <Avatar username={auth.username} className="h-8 w-8" imgClass="w-8 h-8" src={auth.avatar} />
                                                <h4>{auth.username}</h4>
                                            </li>
                                            <li className="flex items-center gap-x-2 mt-4 hover:text-white hover:bg-primary transition transition-colors px-2 py-1 rounded cursor-pointer">
                                                <MdDashboard />
                                                <Link href="/dashboard">Dashboard</Link>
                                            </li>
                                            <li onClick={handleLogout} className="flex items-center gap-x-2 hover:text-white hover:bg-primary transition transition-colors px-2 py-1 rounded cursor-pointer">
                                                <FaSignOutAlt />
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