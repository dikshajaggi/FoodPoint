import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push({ item: action.payload, quantity: 1 });
        },
        clearCart: (state) => {
            state.items = []
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(x => x.item.id !== action.payload.id ) 
            
        },
        setItemQuantityInc: (state, action) => {
            console.log(state.items, action)
            state.items.filter(x => x.item.id === action.payload ? (x.quantity += 1) : x.quantity)
        },
        setItemQuantityDec: (state, action) => {
            state.items.filter(x => x.item.id === action.payload ? x.quantity <= 1 ? x.quantity = 1 : (x.quantity -= 1) : x.quantity)
        }
    }
})

export const { addItems, clearCart, removeItem, setItemQuantityInc, setItemQuantityDec } = cartSlice.actions

export default cartSlice.reducer