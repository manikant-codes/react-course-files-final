import React, { useContext } from "react";
import { userContext } from "./UseContextDemo";

function ComponentD() {
  const user = useContext(userContext);
  return <div>{user}</div>;
}

export default ComponentD;
