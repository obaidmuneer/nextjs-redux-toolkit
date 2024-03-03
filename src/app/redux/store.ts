import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counterSlice"
import todoSlice from "./TodoSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterSlice,
            todo: todoSlice
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']