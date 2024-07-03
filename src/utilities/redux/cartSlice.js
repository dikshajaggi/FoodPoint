import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:  localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(x => x.menu.id !== action.payload)
        },
        setItemQuantityInc: (state, action) => {
            state.items.filter(x => x.menu.id === action.payload ? (x.quantity += 1) : x.quantity)
        },
        setItemQuantityDec: (state, action) => {
            state.items.filter(x => x.menu.id === action.payload ? x.quantity <= 1 ? x.quantity = 1 : (x.quantity -= 1) : x.quantity)
        }
    }
})

export const { addItems, clearCart, removeItem, setItemQuantityInc, setItemQuantityDec } = cartSlice.actions

export default cartSlice.reducer