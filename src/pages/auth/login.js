import React from 'react';
import { useForm } from "react-hook-form";
import Input from "components/Input";
import Button from "components/Button";
import Divider from "components/Divider";
import SocialLogin from "components/SocialLogin";
import Link from "next/link";
import {loginAction} from "../../store/actions/authAction";
import {useDispatch} from "react-redux";

const Login = () => {

    const dispatch  = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        dispatch(loginAction({
            email: data.email,
            password: data.password,
        }))
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto shadow-2xl rounded-lg p-6 mt-10">

            <h1 className="font-bold text-center text-2xl">Create Account</h1>

            <Input
                label="Email"
                error={errors["email"]?.message}
                register={register("email", { required: "Email is required" })}
            />

            <Input
                label="Password"
                type="password"
                error={errors["password"]?.message}
                register={register("password", { required: "Password is required", minLength: {value: 3, message: "Password should be greater than 3 character"} })}
            />


            <Button className="mt-4 w-full" type="submit" >Login</Button>


            <Divider className="my-6" text="OR" />

            <SocialLogin  />

            <div className="text-sm font-medium mt-4 text-center">
                Not have an account? <span className="hover:text-primary"><Link href="/auth/registration">Create account</Link></span>
            </div>


        </form>
    );
};

export default Login;


