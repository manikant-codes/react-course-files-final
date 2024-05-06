import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};

// function reducer(prevState, action) {
//   switch (action.type) {
//     case "BUY": {
//       return prevState.numberOfCakes - 1;
//     }
//     case "REFILL": {
//       return prevState.numberOfCakes + action.payload;
//     }
//     default:
//       return prevState;
//   }
// }

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buy: (prevState, action) => {
      prevState.numberOfCakes -= 1;
    },
    refill: (prevState, action) => {
      prevState.numberOfCakes += action.payload;
    },
  },
});

export const { buy, refill } = cakeSlice.actions;

console.log("cakeSlice.reducer", cakeSlice.reducer);
console.log("buy", buy());
// { type: "cake/buy", payload: undefined }

export default cakeSlice.reducer;
