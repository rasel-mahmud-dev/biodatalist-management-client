import React from 'react';
import {BiGlobe} from "react-icons/bi";
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-primary text-white p-8 ">
            <div className="container flex flex-col justify-center items-center gap-4">
                <ul className="flex items-center gap-4">
                    <li className=""><Link href="">Privacy Policy</Link></li>
                    <li className=""><Link href="">Terms & Conditions</Link></li>
                    <li className=""><Link href="">Refund Policy</Link></li>
                </ul>

                <ul className="flex items-center gap-4">
                    <li className="social-link-item"><Link href=""><BiGlobe /></Link></li>
                    <li className="social-link-item"><Link href=""><FaLinkedin /></Link></li>
                    <li className="social-link-item"><Link href=""><FaFacebook /></Link></li>
                </ul>

                <div>
                    © 2021-{new Date().getFullYear()} biodatalist.com
                </div>
            </div>
        </footer>
    );
};

export default Footer;