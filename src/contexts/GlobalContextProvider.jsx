import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  theme: "light",
  cart: [],
};

function reducer(prevState, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      if (prevState.theme === "light") {
        return { ...prevState, theme: "dark" };
      } else {
        return { ...prevState, theme: "light" };
      }
    }
    case "ADD_TO_CART": {
      return { ...prevState, cart: [...prevState.cart, action.payload] };
    }
    case "UPDATE_QTY": {
      return { ...prevState, cart: [...prevState.cart, action.payload] };
    }
    case "DELETE_FROM_CART": {
      return { ...prevState, cart: [...prevState.cart, action.payload] };
    }
    default:
      return prevState;
  }
}

export function toggleTheme() {
  const calculatedValue = 100;
  return { type: "TOGGLE_THEME", payload: calculatedValue };
}

const GlobalContext = createContext(initialState);

export function useGlobal() {
  return useContext(GlobalContext);
}

function GlobalContextProvider({ children }) {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
