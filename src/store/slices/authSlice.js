import { createSlice } from '@reduxjs/toolkit';
import {fetchCurrentAuthAction, loginAction} from "../actions/authAction";

const initialState = {
    auth: null,
    authLoaded: false
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        updateAccessToken(state, action) {
            state.accessToken = action.payload;
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(loginAction.fulfilled, (state, action) => {
            if(action.payload){
                let {username, email, role, avatar, token} = action.payload
               state.auth = {
                   username, email, role, avatar
               }
               state.authLoaded = true
               localStorage.setItem("token", token)
            }
            // state.entities.push(action.payload)
        })

        // handle rejection error
        builder.addCase(loginAction.rejected, (state, action) => {
            state.auth = null
            state.authLoaded = true
        })


        // handle fetch current auth user
        builder.addCase(fetchCurrentAuthAction.fulfilled, (state, action) => {
            if(action.payload){
                let {username, email, role, avatar} = action.payload
                state.auth = {
                    username, email, role, avatar
                }
                state.authLoaded = true
            }
        })
    }
});


export default authSlice.reducer