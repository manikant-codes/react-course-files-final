import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function useUser() {
  const value = useContext(UserContext);
  return value;
}

function UserProvider(props) {
  const { children } = props;
  const [user, setUser] = useState({ name: "Manikant", id: 1 });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
