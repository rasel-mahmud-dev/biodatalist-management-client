export const backend = "http://localhost:2000"

import axios from "axios";


// export const backend = "https://localhost"


const apis = axios.create({
    baseURL: backend,
    // headers: {
    //     authorization: token
    // }
})


// axios interceptors
apis.interceptors.response.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error

    let message = error.message;

    if(error.response?.data){
        if(error.response.data.message){
            message = error.response.data.message
        } else if(typeof error.response.data === "string"){
            message = error.response.data
        }
    }
    error.message = message
    return Promise.reject(error);
})


// axios interceptors
apis.interceptors.request.use(function (config) {
    const token = window.localStorage.getItem("token")
    console.log(token)
    return config;
}, function (error) {
    // Do something with request error

})

export default apis