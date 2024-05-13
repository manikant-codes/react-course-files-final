import { createSlice } from "@reduxjs/toolkit";

// {type: "cart/addToCart", payload: undefined}
// {type: "cart/removeFromCart", payload: undefined}
// {type: "cart/changeQuantity", payload: undefined}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      //   state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action) => {},
    changeQuantity: (state, action) => {},
  },
});

const cartActions = cartSlice.actions;
export const { addToCart, removeFromCart, changeQuantity } = cartActions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
