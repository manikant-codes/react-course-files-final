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
      state.rose += Number(action.payload);
      state.cash -= Number(action.payload) * state.roseBuyPrice;
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

const flowersSliceReducer = flowersSlice.reducer;

export default flowersSliceReducer;
