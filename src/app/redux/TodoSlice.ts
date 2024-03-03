import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/redux/store'

// Define a type for the slice state
interface TodoState {
    todos: string[]
}

// Define the initial state using that type
const initialState: TodoState = {
    todos: [],
}

interface EditType {
    index: number
    text: string
}

export const todoSlice = createSlice({
    name: 'todo',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.todos.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            state.todos.splice(action.payload, 1)
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        edit: (state, action: PayloadAction<EditType>) => {
            // console.log(action, "action");
            state.todos[action.payload.index] = action.payload.text
        },
    },
})

export const { add, remove, edit } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todo.todos

export default todoSlice.reducer