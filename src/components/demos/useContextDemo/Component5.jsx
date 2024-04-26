import React, { useContext } from "react";
import { UserContext } from "./UseContextDemo";
import { useUser } from "./UserProvider";

function Component5() {
  //   const value = useContext(UserContext);
  const value = useUser();
  return <div>Hello, {value.name}</div>;
}

export default Component5;
