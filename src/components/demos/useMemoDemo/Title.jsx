import React from "react";
import { useUser } from "../useContextDemo/UserProvider";

function Title() {
  const value = useUser();
  return <h1>{value.name}</h1>;
}

export default Title;
