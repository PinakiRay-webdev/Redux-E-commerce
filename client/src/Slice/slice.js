import { createSlice } from "@reduxjs/toolkit";
import productFile from '../json/product.json';

const initialState = {
    productInfo : productFile,
}

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{
        getProductData: (state) =>{
            return state.productInfo;
        },
    }
})

export const {getProductData , getProductByCategory} = productSlice.actions;
export default productSlice.reducer