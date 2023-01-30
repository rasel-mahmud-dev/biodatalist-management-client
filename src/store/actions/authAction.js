import {createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../apis";


// login action
export const loginAction = createAsyncThunk("authSlice/login", async (payload, thunkAPI)=>{
    try{
        let {status, data} = await apis.post("/api/auth/login", payload)
        if(status === 201){
            return data.user
        }
    } catch (ex){
        // send error message with reject type in reducer
        return thunkAPI.rejectWithValue( ex.message)
    }
})



// registration action
export const registrationAction = createAsyncThunk("authSlice/login", async (payload, thunkAPI)=>{
    try{
        let {status, data} = await apis.post("/api/auth/registration", payload)
        if(status === 201){
            return data.user
        }
    } catch (ex){
        // send error message with reject type in reducer
        return thunkAPI.rejectWithValue( ex.message)
    }
})


// registration action
export const fetchCurrentAuthAction = createAsyncThunk("authSlice/fetchCurrentAuthlogin", async (payload, thunkAPI)=>{
    try{
        let {status, data} = await apis.get("/api/auth/fetch-current-auth")
        if(status === 201){
            return data.user
        }
    } catch (ex){
        // send error message with reject type in reducer
        return thunkAPI.rejectWithValue( ex.message)
    }
})