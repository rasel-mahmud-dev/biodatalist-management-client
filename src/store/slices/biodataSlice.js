import { createSlice } from '@reduxjs/toolkit';
import {bioDataApi} from "../services/bioDataApi";


const initialState = {
    filterBiodata: [],
    filter: {}
};

export const biodataSlice = createSlice({
    name: 'biodataSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(
            bioDataApi.endpoints.getFilterBio.matchFulfilled,
            (state, { payload }) => {
               state.filterBiodata = payload
            }
        )
    },
});

// Action creators are generated for each case reducer function
export const { } = biodataSlice.actions

export default biodataSlice.reducer