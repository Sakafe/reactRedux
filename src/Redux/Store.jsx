import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import productReducer from './ProductSlice'
const store = configureStore({
    reducer: {
        // cartReducer just a name
        cart : cartReducer,
        product : productReducer,
    }
})

export default store;