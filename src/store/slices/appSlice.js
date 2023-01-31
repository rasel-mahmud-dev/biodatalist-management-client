import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isOpenSidebar: false
};

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        updateAccessToken(state, action) {
            state.accessToken = action.payload;
        },
        toggleSidebar(state, action){
            state.isOpenSidebar = !state.isOpenSidebar
        }
    }
});

// Action creators are generated for each case reducer function
export const { toggleSidebar } = appSlice.actions

export default appSlice.reducer