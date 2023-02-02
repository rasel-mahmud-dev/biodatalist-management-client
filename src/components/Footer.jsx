import React from 'react';
import {BiGlobe} from "react-icons/bi";
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-primary text-white p-8 ">
            <div className="container flex flex-col justify-center items-center gap-4">
                <ul className="flex items-center gap-4 text-sm md:text-base text-center">
                    <li className=""><Link href="">Privacy Policy</Link></li>
                    <li className=""><Link href="">Terms & Conditions</Link></li>
                    <li className=""><Link href="">Refund Policy</Link></li>
                </ul>

                <ul className="flex items-center gap-4">
                    <li className="social-link-item"><Link target={"_blank"} href="https://rasel-portfolio.vercel.app"><BiGlobe /></Link></li>
                    <li className="social-link-item"><Link target={"_blank"} href="https://www.linkedin.com/in/rasel-mahmud-dev"><FaLinkedin /></Link></li>
                    <li className="social-link-item"><Link target={"_blank"} href="https://github.com/rasel-mahmud-dev"><FaGithub /></Link></li>
                    <li className="social-link-item"><Link target={"_blank"} href="https://www.facebook.com/rasel.mahmud.dev"><FaFacebook /></Link></li>
                </ul>

                <div>
                    © 2018-{new Date().getFullYear()} biodatalist.com
                </div>
            </div>
        </footer>
    );
};

export default Footer;