import { configureStore } from "@reduxjs/toolkit";
import cakeSliceReducer from "./slices/cakeSlice";
import flowersSliceReducer from "./slices/flowersSlice";

const store = configureStore({
  reducer: {
    cake: cakeSliceReducer,
    flowers: flowersSliceReducer,
  },
});

export default store;
