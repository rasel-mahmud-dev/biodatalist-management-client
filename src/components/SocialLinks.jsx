import React from "react";
import {  BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { DiCodepen } from "react-icons/di";
import {CgFacebook} from "react-icons/cg";

const SocialLinks = () => {
    const socials = [
        { icon: <CgFacebook className="text-base " />, url: "https://www.facebook.com/rasel.mahmud.dev" },
        { icon: <BsInstagram className="text-base " />, url: "https://www.instagram.com/raselmraju" },
        { icon: <BsGithub className="text-base " />, url: "https://github.com/rasel-mahmud-dev" },
        { icon: <DiCodepen className="text-base " />, url: "https://codepen.io/rasel-mahmud-dev" },
        { icon: <FaDev className="text-base " />, url: "https://dev.to/raselmahmuddev" },
        { icon: <BsLinkedin className="text-base " />, url: "https://www.linkedin.com/in/rasel-mahmud-dev" },
    ];

    return (
        <ul className="flex align-center gap-x-2">
            {socials.map((social, i) => (
                <a className="social-icon " rel="noreferrer" key={i.toString()} target="_blank" href={social.url}>
                    {social.icon}
                </a>
            ))}
        </ul>
    );
};

export default SocialLinks;
