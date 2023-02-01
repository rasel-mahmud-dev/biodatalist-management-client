import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { bioDataApi } from './services/bioDataApi'
import authReducer from "./slices/authSlice";
import appReducer from "./slices/appSlice";
import biodataReducer from "./slices/biodataSlice";
import {usersApi} from "./services/usersApi";


export const store = configureStore({
    reducer: {
        authState: authReducer,
        appState: appReducer,
        biodataState: biodataReducer,
        // Add the generated reducer as a specific top-level slice
        [bioDataApi.reducerPath]: bioDataApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,

    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([bioDataApi.middleware, usersApi.middleware]),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)