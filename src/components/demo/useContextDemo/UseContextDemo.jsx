import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";

export const userContext = createContext();

function UseContextDemo() {
  const [user, setUser] = useState("Manikant");
  return (
    <userContext.Provider value={user}>
      <ComponentA />
    </userContext.Provider>
  );
}

export default UseContextDemo;
