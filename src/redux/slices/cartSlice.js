import { createSlice } from "@reduxjs/toolkit";

function setCartTotals(prevState) {
  prevState.subTotal = prevState.cartItems.reduce(
    (acc, value, index, array) => {
      return (acc += value.price * value.qty);
    },
    0
  );
  prevState.tax = (prevState.subTotal * (prevState.taxRate / 100)).toFixed(2);
  prevState.total = Number(prevState.subTotal) + Number(prevState.tax);
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
      const alreadyExists = prevState.cartItems.find((value) => {
        if (value.id === action.payload.id) {
          return true;
        }
        return false;
      });

      if (alreadyExists) {
        const newCartItems = prevState.cartItems.map((value) => {
          if (value.id === action.payload.id) {
            return { ...value, qty: value.qty + 1 };
          }
          return value;
        });
        prevState.cartItems = newCartItems;
      } else {
        prevState.cartItems.push(action.payload);
      }
      setCartTotals(prevState);
    },
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
    increaseQty: (prevState, action) => {
      const newCartItems = prevState.cartItems.map((value) => {
        if (value.id === action.payload) {
          return { ...value, qty: value.qty + 1 };
        }
        return value;
      });
      prevState.cartItems = newCartItems;
      setCartTotals(prevState);
    },
    decreaseQyt: (prevState, action) => {
      let newCartItems = prevState.cartItems.map((value) => {
        if (value.id === action.payload) {
          if (value.qty > 1) {
            return { ...value, qty: value.qty - 1 };
          }
          return null;
        }
        return value;
      });

      newCartItems = newCartItems.filter((value) => {
        if (value === null) return false;
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
