import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numberOfCakes: 10,
  },
  reducers: {
    order: () => {},
    restock: () => {},
  },
});
