import { createSlice } from "@reduxjs/toolkit";
import { refill } from "./cakeSlice";

const initialState = {
  numberOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    buyIcecream: (prevState, action) => {
      if (prevState.numberOfIcecreams > 0) {
        prevState.numberOfIcecreams -= 1;
      }
    },
    refillIcecrem: (prevState, action) => {
      prevState.numberOfIcecreams += action.payload;
    },
  },
});

export const { buyIcecream, refillIcecrem } = icecreamSlice.actions;

export default icecreamSlice.reducer;
