import React, { useState, createContext } from "react";
import Component1 from "./Component1";
import UserProvider from "./UserProvider";

// export const UserContext = createContext();

function UseContextDemo() {
  //   const [user, setUser] = useState({ id: 1, name: "Manikant" });
  //   console.log("UserContext", UserContext);

  return (
    // <UserContext.Provider value={user}>
    //   <div style={{ padding: "16px 32px", backgroundColor: "#eeeeee" }}>
    //     <h1>useContext Hook</h1>
    //   </div>
    //   <div>
    //     <Component1 />
    //   </div>
    // </UserContext.Provider>
    <UserProvider>
      <div style={{ padding: "16px 32px", backgroundColor: "#eeeeee" }}>
        <h1>useContext Hook</h1>
      </div>
      <div>
        <Component1 />
      </div>
    </UserProvider>
  );
}

export default UseContextDemo;
