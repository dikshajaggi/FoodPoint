import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import userSlice from "./userSlice"
console.log(cartSlice, "cartslice")

const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice
    }
})

export default store