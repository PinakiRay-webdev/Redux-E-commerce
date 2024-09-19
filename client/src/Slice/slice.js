import { createSlice } from "@reduxjs/toolkit";
import productFile from '../json/product.json';

const initialState = {
    productInfo : productFile,
    productCategory : null
}

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{
        getProductData: (state) =>{
            return state.productInfo;
        },

        getProductByCategory : (state , action) =>{
            const categoryId = action.payload;
            const currentCetegory = state.productInfo.productData.find((catName) => catName.id === categoryId);
            state.productCategory = currentCetegory;
        }
    }
})

export const {getProductData , getProductByCategory} = productSlice.actions;
export default productSlice.reducer