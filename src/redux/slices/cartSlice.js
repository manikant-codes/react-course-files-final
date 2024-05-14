import { createSlice } from "@reduxjs/toolkit";

// {type: "cart/addToCart", payload: undefined}
// {type: "cart/removeFromCart", payload: undefined}
// {type: "cart/changeQuantity", payload: undefined}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    subTotal: 0,
    tax: 0,
    taxRate: 18,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      if (
        state.cartItems.find((element) => {
          return element.id === action.payload.id;
        })
      ) {
        const newArray = state.cartItems.map((element, index, array) => {
          if (element.id === action.payload.id) {
            return { ...element, quantity: element.quantity + 1 };
          }
          return element;
        });
        state.cartItems = newArray;
      } else {
        state.cartItems.push(action.payload);
      }
      //   state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action) => {
      const newArray = state.cartItems.filter((element, index, array) => {
        if (element.id === action.payload) {
          return false;
        }
        return true;
      });

      state.cartItems = newArray;
    },
    increment: (state, action) => {
      const newArray = state.cartItems.map((element, index, array) => {
        if (element.id === action.payload) {
          return { ...element, quantity: element.quantity + 1 };
        }
        return element;
      });
      state.cartItems = newArray;
    },
    decrement: (state, action) => {
      let newArray = state.cartItems.map((element, index, array) => {
        if (element.id === action.payload) {
          if (element.quantity > 1) {
            return { ...element, quantity: element.quantity - 1 };
          } else {
            return null;
          }
        }
        return element;
      });

      newArray = newArray.filter((element) => {
        if (element !== null) {
          return true;
        }
        return false;
      });

      state.cartItems = newArray;
    },
  },
});

const cartActions = cartSlice.actions;
export const { addToCart, removeFromCart, increment, decrement } = cartActions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
