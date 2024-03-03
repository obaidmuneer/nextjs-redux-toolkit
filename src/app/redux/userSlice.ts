import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/app/redux/store'

export const fetchUserById = createAsyncThunk(
    'user',
    async (userId: string) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            return await response.json()
        } catch (error) {
            throw error
        }
    },
)

interface UserState {
    name: string
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: UserState = {
    name: "",
    loading: 'idle',
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.name = action.payload.name
                state.loading = 'succeeded'

            })
            .addCase(fetchUserById.pending, (state, action) => {
                state.loading = 'pending'

            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.loading = 'failed'
            })
    },
})


export default userSlice.reducer

