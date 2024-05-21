import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import usersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: usersReducer,
  },
});

export const { dispatch, getState } = store;
export default store;
