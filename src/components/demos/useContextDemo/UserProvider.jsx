import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function useUser() {
  const value = useContext(UserContext);
  return value;
}

function UserProvider({ children }) {
  const [user, setUser] = useState({ id: 1, name: "Manikant" });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
