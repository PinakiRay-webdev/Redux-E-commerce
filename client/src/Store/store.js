import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Slice/slice'
import cartReducer from '../Slice/cartSlice'
export const store = configureStore({
    reducer:{
        product : productReducer,
        cart: cartReducer
    },
})