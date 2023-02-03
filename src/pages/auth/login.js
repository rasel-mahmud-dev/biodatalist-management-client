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
import redirectLogin from "../../utils/redirectLogin";
import Loader from "components/Loader";
import HttpLoadingPopup from "components/HttpLoadingPopup";

const Login = () => {

    let [responseErrorMsg, setResponseErrorMsg] = useState("")
    let [isHttpLoading, setHttpLoading] = useState(false)

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
        setHttpLoading(true)

        dispatch(loginOrRegistrationAction({
            type: "login",
            data: {
                email: data.email.trim(),
                password: data.password.trim(),
            }
        })).unwrap().then(()=>{
            redirectLogin(router)

        }).catch(ex=>{
            if(ex && typeof ex === "string"){
                setResponseErrorMsg(ex)
            }
        }).finally(()=>setHttpLoading(false))
    }

    let redirect = router.query?.redirect


    return (

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto shadow-2xl rounded-lg p-6 mt-10">

            <h1 className="font-bold text-center text-2xl">Login to your account </h1>

            <HttpLoadingPopup onClose={()=>setHttpLoading(false)} isLoading={isHttpLoading}>
                <Loader className="loader-center !relative" titleClass="font-medium text-sm" title="Please wait...!"  />
            </HttpLoadingPopup>


            <div className="py-4">
                <p className="text-xs flex flex-col items-center">
                    <span className="font-medium">Admin</span>
                    <span>email: admin@gmail.com</span>
                    <span>pass: 123</span>
                </p>
                <p className="text-xs flex flex-col items-center mt-2">
                    <span className="font-medium">Customer</span>
                    <span>email: test@gmail.com</span>
                    <span>pass: 123</span>
                </p>
            </div>


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
                Not have an account? <span className="hover:text-primary"><Link href={`/auth/registration${redirect ? "?redirect="+redirect : ""}`}>Create account</Link></span>
            </div>


        </form>
    );
};

export default Login;


