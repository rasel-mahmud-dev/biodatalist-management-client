import { createSlice } from '@reduxjs/toolkit';
import {fetchCurrentAuthAction, loginOrRegistrationAction} from "../actions/authAction";
import {fetchAuthBiodataAction} from "../actions/biodataAction";


const initialState = {
    auth: null,
    authLoaded: false,
    biodata: null
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        // logout user action
        logoutAction(state, action) {
            state.auth = null
            state.authLoaded = true
            state.biodata = null
            localStorage.removeItem("token")
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loginOrRegistrationAction.fulfilled, (state, action) => {
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
        builder.addCase(loginOrRegistrationAction.rejected, (state, action) => {
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

        // handle rejection
        builder.addCase(fetchCurrentAuthAction.rejected, (state, action) => {
            state.auth = null
            state.authLoaded = true
        })


        // handle fetch current user bio data
        builder.addCase(fetchAuthBiodataAction.fulfilled, (state, action) => {
            if(action.payload){
                state.biodata = action.payload
            }
        })
    }
});

// Action creators are generated for each case reducer function
export const { logoutAction } = authSlice.actions

export default authSlice.reducer