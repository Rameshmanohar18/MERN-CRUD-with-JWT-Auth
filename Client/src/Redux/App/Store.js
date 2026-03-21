import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "../../Feautures/Categories/CategorySlice"
import productReducer from "../../Feautures/Products/ProductSlice"
import authReducer from "../../Feautures/Auth/authSlice"

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    auth: authReducer
  }
})