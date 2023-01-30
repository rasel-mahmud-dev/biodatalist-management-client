import {createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../apis";


// login action
export const loginOrRegistrationAction = createAsyncThunk("authSlice/login", async (payload, thunkAPI)=>{
    try{
        // here type should be login or registration
        let {status, data} = await apis.post(`/api/auth/${payload.type}`, payload.data)
        if(status === 201){
            return data.user
        }
    } catch (ex){
        // send error message with reject type in reducer
        return thunkAPI.rejectWithValue( ex.message)
    }
})




// registration action
export const fetchCurrentAuthAction = createAsyncThunk("authSlice/fetchCurrentAuth", async (payload, thunkAPI)=>{
    try{
        let {status, data} = await apis.get("/api/auth/fetch-current-auth")
        if(status === 200){
            return data.user
        }
    } catch (ex){
        // send error message with reject type in reducer
        return thunkAPI.rejectWithValue( ex.message)
    }
})


