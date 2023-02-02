import { createSlice } from '@reduxjs/toolkit';
import {bioDataApi} from "../services/bioDataApi";


const initialState = {
    filterBiodata: [],
    totalItems: 0,
    filter: {},
    sort: {field: "createdAt", order: -1},
    pagination: {
        perPage: 5,
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
        },

        changeFilter: (state , action)=>{
            if(action.payload !== undefined){
                // clear other filter is select biodataNo
                if(action.payload.biodataNo){
                    state.filter = {
                        biodataNo: action.payload.biodataNo
                    }
                } else {
                    state.filter = {
                        ...state.filter,
                        ...action.payload
                    }
                }
            }
        },
        clearFilter: (state )=>{
            state.filter = {}
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

                if(payload.biodata && payload.biodata.length === 0){
                    state.totalItems = 0
                }

            }
        )
    },
});

// Action creators are generated for each case reducer function
export const { changePagination, changeSort, changeFilter, clearFilter } = biodataSlice.actions

export default biodataSlice.reducer