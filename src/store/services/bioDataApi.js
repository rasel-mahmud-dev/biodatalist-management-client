import {createApi} from '@reduxjs/toolkit/query/react'

import apis from "../../apis";

const axiosBaseQuery = () => {
    return async ({url, method, data, params}) => {
        try {
            const result = await apis({url: url, method, data, params})
            return {data: result.data}
        } catch (axiosError) {
            let err = axiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }
}


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
