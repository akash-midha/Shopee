import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
    reducer:{
        cart: cartSlice,
        theme: themeSlice
    }
})