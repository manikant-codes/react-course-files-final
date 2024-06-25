import { configureStore } from "@reduxjs/toolkit";
import cakeSliceReducer from "./slices/cakeSlice";
import flowersSliceReducer from "./slices/flowersSlice";
import userSliceReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeSliceReducer,
    flowers: flowersSliceReducer,
    user: userSliceReducer,
  },
});

export default store;
