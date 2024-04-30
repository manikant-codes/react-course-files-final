import React, { createContext, useState } from "react";
import Component1 from "./Component1";

export const UserContext = createContext();

function UseContextDemo() {
  const [user, setUser] = useState({ name: "Manikant" });
  return (
    <UserContext.Provider value={user}>
      <Component1 />
    </UserContext.Provider>
  );
}

export default UseContextDemo;
