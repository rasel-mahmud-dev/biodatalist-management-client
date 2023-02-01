import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Input from "components/Input";
import Button from "components/Button";
import Divider from "components/Divider";
import SocialLogin from "components/SocialLogin";
import Link from "next/link";
import { loginOrRegistrationAction} from "../../store/actions/authAction";
import {useDispatch} from "react-redux";
import ErrorMessage from "components/ErrorMessage";
import {useRouter} from "next/router"

const Login = () => {

    let [responseErrorMsg, setResponseErrorMsg] = useState("")

    const router = useRouter()


    const dispatch  = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {

        //clear old error message
        setResponseErrorMsg("")


        dispatch(loginOrRegistrationAction({
            type: "login",
            data: {
                email: data.email.trim(),
                password: data.password.trim(),
            }
        })).unwrap().then(()=>{
            router.push("/")
        }).catch(ex=>{
            if(ex && typeof ex === "string"){
                setResponseErrorMsg(ex)
            }
        })
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto shadow-2xl rounded-lg p-6 mt-10">

            <h1 className="font-bold text-center text-2xl">Create Account</h1>

            <ErrorMessage message={responseErrorMsg} />

            <Input
                label="Email"
                type="email"
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


