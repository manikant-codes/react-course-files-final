import { createSlice } from "@reduxjs/toolkit";

// {type: "cart/addToCart", payload: undefined}
// {type: "cart/removeFromCart", payload: undefined}
// {type: "cart/changeQuantity", payload: undefined}

function localStorageHelper(str, defaultValue) {
  const temp = JSON.parse(localStorage.getItem(str));
  if (!temp) {
    return defaultValue;
  }
  return temp;
}

function cartLocalStorageHelper(state) {
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  localStorage.setItem("total", JSON.stringify(state.total));
  localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
  localStorage.setItem("tax", JSON.stringify(state.tax));
}

function setCartTotals(state) {
  let tax = 0;
  let total = 0;
  let subTotal = 0;

  for (const product of state.cartItems) {
    subTotal += product.quantity * product.price;
  }

  tax = Number((subTotal * (state.taxRate / 100)).toFixed(2));

  total = subTotal + tax;

  state.total = total;
  state.subTotal = subTotal;
  state.tax = tax;

  cartLocalStorageHelper(state);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorageHelper("cartItems", []),
    subTotal: localStorageHelper("subTotal", 0),
    tax: localStorageHelper("tax", 0),
    taxRate: 18,
    total: localStorageHelper("total", 0),
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
      setCartTotals(state);
    },
    removeFromCart: (state, action) => {
      const newArray = state.cartItems.filter((element, index, array) => {
        if (element.id === action.payload) {
          return false;
        }
        return true;
      });

      state.cartItems = newArray;
      setCartTotals(state);
    },
    increment: (state, action) => {
      const newArray = state.cartItems.map((element, index, array) => {
        if (element.id === action.payload) {
          return { ...element, quantity: element.quantity + 1 };
        }
        return element;
      });
      state.cartItems = newArray;
      setCartTotals(state);
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

      setCartTotals(state);
    },
  },
});

const cartActions = cartSlice.actions;
export const { addToCart, removeFromCart, increment, decrement } = cartActions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
