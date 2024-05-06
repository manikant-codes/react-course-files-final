import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./slices/cakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
