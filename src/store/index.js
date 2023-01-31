import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { bioData } from './services/bioData'
import authReducer from "./slices/authSlice";
import appReducer from "./slices/appSlice";


export const store = configureStore({
    reducer: {
        authState: authReducer,
        appState: appReducer,
        // Add the generated reducer as a specific top-level slice
        [bioData.reducerPath]: bioData.reducer,

    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([bioData.middleware]),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)