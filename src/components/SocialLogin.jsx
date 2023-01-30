import React from "react";
import {backend} from "src/apis";
import { BsGoogle} from "react-icons/bs";
import Button from "components/Button";

const SocialLogin = ({className = ""}) => {
    return (
        <div className={className}>
            <Button className="!bg-red-400 justify-center items-center flex w-full  border-none text-white font-semibold ">
                <a href={`${backend}/api/auth/google`} className="flex items-center">
                    <BsGoogle className="mr-2 text-md"/>
                    Login With Google
                </a>
            </Button>
        </div>
    );
};

export default SocialLogin;
