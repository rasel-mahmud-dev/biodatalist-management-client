import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Button from "components/Button";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "components/Avatar";
import Popup from "components/Popup";
import {MdDashboard} from "react-icons/md";
import {FaSignOutAlt} from "react-icons/fa";
import {logoutAction} from "../store/slices/authSlice";
import {toggleSidebar} from "../store/slices/appSlice";
import ActiveLink from "components/ActiveLink";
import {useRouter} from "next/router";

const Navigation = () => {
    const {auth} = useSelector(state => state.authState)

    const dispatch = useDispatch()


    const [openAuthPopup, setOpenAuthPopup] = useState(false)
    const [expandMobileNav, setExpandMobileNav] = useState(false)

    const [isOpenSidebarIcon, setOpenSidebarIcon] = useState(false)

    const {asPath, isReady} = useRouter()

    let whitelist = ["/user", "/biodata", "/admin"]

    useEffect(() => {
        let isOpen = false
        whitelist.forEach(item=>{
           if(asPath.indexOf(item) !== -1){
               isOpen = true
           }
        })

        if(!isOpen){
            setOpenSidebarIcon(false)
        } else {
            setOpenSidebarIcon(true)
        }
    }, [asPath])


    function handleLogout() {
        dispatch(logoutAction())
    }

    const navItems = [
        {label: "Home", href: "/"},
        {label: "Biodata", href: "/biodata"},
        {label: "About Me", href: "/about"},
        {label: "Ask", href: "/"},
        {label: "Direction", href: "/"},
        {label: "Contact", href: "/"},
    ]


    function handleToggleSidebar(e){
        dispatch(toggleSidebar())
    }

    function handleToggleMobileNav(){
        setExpandMobileNav(!expandMobileNav)
    }

    return (
        <div className={`bg-white shadow-xl fixed top-0 left-0 w-full navigation ${expandMobileNav ? "expand-mobile-nav": ""}` }>
            <header className="flex justify-between container mx-auto items-center">
                <div className="flex items-center justify-between gap-x-2 relative z-50">
                    {isOpenSidebarIcon && <img className="w-8 cursor-pointer block lg:hidden" src="/icons/menu.svg" onClick={handleToggleSidebar} alt="menu"/> }
                    <Link href="/">
                        <img className="w-28" src="/icons/bio-logo.svg" alt=""/>
                    </Link>
                </div>
                <nav className="nav-items">
                    <ul className="flex items-center gap-x-6 py-4">
                        {navItems.map(item=>(
                            <li key={item.label} className="text-sm font-medium ">
                                <ActiveLink onClick={()=>setExpandMobileNav(false)} activeClassName="active" href={item.href}>{item.label}</ActiveLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav>
                    <ul className="flex items-center gap-x-4 py-2">
                        <li>
                            {auth ? (
                                <div onClick={() => setOpenAuthPopup(!openAuthPopup)}
                                     onMouseLeave={() => setOpenAuthPopup(false)}
                                     onMouseEnter={() => setOpenAuthPopup(true)}
                                     className="relative">
                                    <Avatar username={auth.username}  className="h-10 w-10" src={auth.avatar}/>
                                    <Popup isOpen={openAuthPopup} className="right-0 shadow-xl">
                                        <ul>
                                            <li className="flex items-center gap-x-2">
                                                <Avatar username={auth.username} className="h-8 w-8"
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
                        <li>
                            <img  className="w-6 relative z-50 cursor-pointer block md:hidden" src="/icons/Vector(1).svg" onClick={handleToggleMobileNav}/>
                        </li>
                    </ul>

                </nav>
            </header>
        </div>
    );
};




export default Navigation;