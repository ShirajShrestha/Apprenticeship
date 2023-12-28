import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlice";

const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default Store;
