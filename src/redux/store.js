import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import usersReducer from "./slices/usersSlice";

const myStore = configureStore({
  reducer: {
    cart: cartReducer,
    users: usersReducer,
  },
});

export default myStore;
