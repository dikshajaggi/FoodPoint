import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload
            // this action.payload will replace the value of initial state
        },
        removeUser: (state, action) => {
            return null
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer