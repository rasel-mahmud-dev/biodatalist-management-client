import {createApi} from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from "../customRTKBaseQuery";


// Define a service using a base URL and expected endpoints
export const bioDataApi = createApi({
    baseQuery: axiosBaseQuery(),
    reducerPath: 'bioDataApi',

    tagTypes: ['Biodatas'],

    endpoints: (builder) => {
        return {
            getFilterBio: builder.query({
                query: (filter) => {
                    return {url: "/api/biodata/filter", method: "POST", data: filter}
                },
                providesTags: ["Biodatas"],
            }),

            updateFilterBio: builder.mutation({
                query: (filter) => {
                    return {url: "/api/biodata/filter", method: "POST", data: filter}
                },
                invalidatesTags: ['Biodatas'],
            })
        }
    },
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const {useGetFilterBioQuery, useUpdateFilterBioMutation} = bioDataApi
