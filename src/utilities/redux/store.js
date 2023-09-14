import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
console.log(cartSlice, "cartslice")

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store