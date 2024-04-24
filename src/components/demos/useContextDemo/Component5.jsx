import React from "react";
import { useUser } from "./UserProvider";

function Component5() {
  const value = useUser();
  console.log("value", value);
  return <div>Hello, {value.name} </div>;
}

export default Component5;
