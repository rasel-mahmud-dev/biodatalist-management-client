import {createApi} from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from "../customRTKBaseQuery";


// Define a service using a base URL and expected endpoints
export const bioDataApi = createApi({
    baseQuery: axiosBaseQuery(),
    reducerPath: 'bioDataApi',

    tagTypes: ["allBiodata"],

    endpoints: (builder) => {
        return {
            getFilterBio: builder.query({
                query: (filter) => ({url: "/api/biodata/filter", method: "POST", data: filter})
            }),

            fetchAllBioData: builder.query({
                query: () => ({url: "/api/biodata/all", method: "GET"}),
                providesTags: ['allBiodata'],
            })
        }
    },
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const {useGetFilterBioQuery, useFetchAllBioDataQuery} = bioDataApi
