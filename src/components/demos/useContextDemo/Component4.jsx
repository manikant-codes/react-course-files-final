import React, { useContext } from "react";
import { UserContext } from "./UseContextDemo";

function Component4() {
  const user = useContext(UserContext);
  return <div>Hello, {user.name}</div>;
}

export default Component4;
