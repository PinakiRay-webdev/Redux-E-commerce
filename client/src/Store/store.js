import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Slice/slice'
export const store = configureStore({
    reducer:{
        product : productReducer
    },
})