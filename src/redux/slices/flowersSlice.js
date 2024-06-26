import { createSlice } from "@reduxjs/toolkit";

const flowersSlice = createSlice({
  name: "flowers",
  initialState: {
    rose: 10,
    sunflower: 10,
    orchid: 10,

    roseBuyPrice: 15,
    roseSellPrice: 20,

    cash: 1000,
  },
  reducers: {
    buyRose: (state, action) => {
      if (state.rose > 0) {
        state.rose -= 1;
        state.cash += state.roseSellPrice;
      }
    },
    restockRoses: (state, action) => {
      const requiredAmount = Number(action.payload) * state.roseBuyPrice;
      if (requiredAmount < state.cash) {
        state.rose += Number(action.payload);
        state.cash -= requiredAmount;
      }
    },
    buySunflower: (state, action) => {
      state.sunflower -= 1;
    },
    restockSunflowers: (state, action) => {
      state.sunflower += Number(action.payload);
    },
    buyOrchid: (state, action) => {
      state.orchid -= 1;
    },
    restockOrchids: (state, action) => {
      state.orchid += 1;
    },
  },
});

export const {
  buyRose,
  restockRoses,
  buySunflower,
  restockSunflowers,
  buyOrchid,
  restockOrchids,
} = flowersSlice.actions;

console.log("buyRose", buyRose(10));

const flowersSliceReducer = flowersSlice.reducer;

export default flowersSliceReducer;
