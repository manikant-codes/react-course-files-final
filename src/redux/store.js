import { configureStore } from "@reduxjs/toolkit";
import cakeSliceReducer from "./slices/cakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeSliceReducer,
  },
});

export default store;
