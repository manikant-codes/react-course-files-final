import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const myStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default myStore;
