import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        quantity: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
        removeItem: (state, action) => {
            state.items = action.payload
        },
        setItemQuantity: (state, action) => {
            state.quantity.push(action.payload)
        }
    }
})

export const { addItems, clearCart, removeItem, setItemQuantity } = cartSlice.actions

export default cartSlice.reducer