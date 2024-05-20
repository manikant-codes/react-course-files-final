import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import usersReducer from "./slices/usersSlice";
import postsRecucer from "./slices/postsSlice";

const myStore = configureStore({
  reducer: {
    cart: cartReducer,
    users: usersReducer,
    posts: postsRecucer,
  },
});

export default myStore;
