import { createSlice } from "@reduxjs/toolkit";

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: {
    numberOfIcecreams: 10,
  },
  reducers: {
    buyIcecream: (prevState, action) => {
      prevState.numberOfIcecreams -= 1;
    },
    refillIcecream: (prevState, action) => {
      prevState.numberOfIcecreams += action.payload;
    },
  },
});

export const { buyIcecream, refillIcecream } = icecreamSlice.actions;

export default icecreamSlice.reducer;
