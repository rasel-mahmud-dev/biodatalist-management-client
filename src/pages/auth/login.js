import React from 'react';
import { useForm } from "react-hook-form";
import Input from "components/Input";
import Button from "components/Button";
import Divider from "components/Divider";
import SocialLogin from "components/SocialLogin";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {

    }


    return (

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto shadow-2xl rounded-lg p-6 mt-10">

            <h1 className="font-bold text-center text-2xl">Login to your account</h1>

            <Input
                label="Email"
                error={errors["email"]?.message}
                register={register("email", { required: "Email is required" })}
            />

            <Input
                label="Password"
                type="password"
                error={errors["password"]?.message}
                register={register("password", { required: "Password is required" })}
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <Button className="mt-4 w-full" type="submit" >Login</Button>


            <Divider className="my-6" text="OR" />

            <SocialLogin  />


        </form>
    );
};

export default Login;


