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
      if (prevState.numberOfCakes > 0) {
        prevState.numberOfCakes -= 1;
      }
    },
    refill: (prevState, action) => {
      prevState.numberOfCakes += action.payload;
    },
  },
});

export const { buy, refill } = cakeSlice.actions;

console.log("cakeSlice.reducer", cakeSlice.reducer);
console.log("buy", buy());

// dispatch({type: "cake/buy", payload: undefined})
// dispatch(buy());

export default cakeSlice.reducer;
