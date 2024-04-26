import React, { createContext, useState } from "react";
import Component1 from "./Component1";
import UserProvider from "./UserProvider";

// export const UserContext = createContext();

function UseContextDemo() {
  //   const [user, setUser] = useState({ name: "Manikant", id: 1 });
  return (
    // <UserContext.Provider value={user}>
    <UserProvider>
      <Component1 />
    </UserProvider>
    // </UserContext.Provider>
  );
}

export default UseContextDemo;
