import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};

// function reducer(prevState, action) {
//   switch (action.type) {
//     case "cake/buy":
//       prevState.numberOfCakes -= 1;
//       break;
//     case "cake/refill":
//       prevState.numberOfCakes += action.payload;
//       break;
//     default:
//       break;
//   }
// }

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (prevState, action) => {
      prevState.numberOfCakes -= 1;
    },
    refillCake: (prevState, action) => {
      prevState.numberOfCakes += action.payload;
    },
  },
});

export const { buyCake, refillCake } = cakeSlice.actions;

export default cakeSlice.reducer;
