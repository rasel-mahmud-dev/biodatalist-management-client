import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: null
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        updateAccessToken(state, action) {
            state.accessToken = action.payload;
        },
    },
});


export default authSlice.reducer