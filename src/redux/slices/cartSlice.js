import { createSlice } from "@reduxjs/toolkit";

function setCartTotals(prevState) {
  prevState.subTotal = prevState.cartItems.reduce(
    (acc, value, index, array) => {
      return (acc += value.price);
    },
    0
  );
  prevState.tax = prevState.subTotal * (prevState.taxRate / 100);
  prevState.total = prevState.subTotal + prevState.tax;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    subTotal: 0,
    taxRate: 18,
    tax: 0,
    total: 0,
  },
  reducers: {
    addToCart: (prevState, action) => {
      prevState.cartItems.push(action.payload);
      setCartTotals(prevState);
    },
    increaseQty: () => {},
    decreaseQyt: () => {},
    removeFromCart: (prevState, action) => {
      const newCartItems = prevState.cartItems.filter((item) => {
        if (item.id === action.payload) {
          return false;
        }
        return true;
      });

      prevState.cartItems = newCartItems;
      setCartTotals(prevState);
    },
  },
});

export const { addToCart, increaseQty, decreaseQyt, removeFromCart } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
