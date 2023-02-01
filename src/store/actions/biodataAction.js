import {createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../apis";



// fetch current logged user biodata
export const fetchAuthBiodataAction = createAsyncThunk("authSlice/updateBiodata", async (payload, thunkAPI)=>{
    try{
        let {status, data} = await apis.get("/api/biodata", payload)
        if(status === 200){
            return data
        }
    } catch (ex){
        // send error message with reject type in reducer
        return thunkAPI.rejectWithValue( ex.message)
    }
})



// update biodata action
export const updateBiodataAction = createAsyncThunk("authSlice/updateBiodata", async (payload, thunkAPI)=>{
    try{
        let {status, data} = await apis.patch("/api/biodata", payload)
        if(status === 201){
            return data
        }
    } catch (ex){
        // send error message with reject type in reducer
        return thunkAPI.rejectWithValue( ex.message)
    }
})