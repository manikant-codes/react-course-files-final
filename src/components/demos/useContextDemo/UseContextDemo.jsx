import React, { createContext, useState } from "react";
import Component1 from "./Component1";

export const UserContext = createContext(null);
const { Provider } = UserContext;

function UseContextDemo() {
  const [name, setUser] = useState({ name: "Manikant" });
  return (
    <UserContext.Provider value={name}>
      <Component1 />
    </UserContext.Provider>
  );
}

export default UseContextDemo;
