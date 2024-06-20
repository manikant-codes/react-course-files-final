import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numberOfCakes: 10,
  },
  reducers: {
    order: (state, action) => {
      state.numberOfCakes -= 1;
    },
    restock: (state, action) => {
      state.numberOfCakes += 1;
    },
  },
});

export const { order, restock } = cakeSlice.actions;

const cakeSliceReducer = cakeSlice.reducer;

export default cakeSliceReducer;
