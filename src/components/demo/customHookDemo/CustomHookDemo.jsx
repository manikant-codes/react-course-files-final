import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

function CustomHookDemo() {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong...</h1>;

  console.log(data);

  return <h1>Users Data</h1>;
}

export default CustomHookDemo;
