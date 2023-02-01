import { createSlice } from '@reduxjs/toolkit';
import {bioDataApi} from "../services/bioDataApi";


const initialState = {
    filterBiodata: [],
    totalItems: 0,
    filter: {},
    sort: {field: "createdAt", order: 1},
    pagination: {
        perPage: 20,
        currentPage: 1
    }
};

export const biodataSlice = createSlice({
    name: 'biodataSlice',
    initialState,
    reducers: {
        changePagination: (state , action)=>{
            if(action.payload.pageNumber !== undefined){
                state.pagination.currentPage = action.payload.pageNumber
            }
            if(action.payload.perPage !== undefined){
                state.pagination.perPage = action.payload.perPage
            }
        },
        changeSort: (state , action)=>{
            if(action.payload.field !== undefined){
                state.sort.field = action.payload.field
            }
            if(action.payload.order !== undefined){
                state.sort.order = action.payload.order
            }
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            bioDataApi.endpoints.getFilterBio.matchFulfilled,
            (state, { payload }) => {
               state.filterBiodata = payload.biodata
                if(payload.count !== undefined){
                    state.totalItems = payload.count
                }
            }
        )
    },
});

// Action creators are generated for each case reducer function
export const { changePagination, changeSort } = biodataSlice.actions

export default biodataSlice.reducer