import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import useFetch from "../../customHooks/useFetch";

function UseEffectDemo() {
  const {
    loading,
    data: users,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <Loader loaderSize="3rem" containerHeight="100vh" />;

  if ((!loading && error) || !users) return <h1>Something went wrong...</h1>;

  return (
    <div>
      {users?.map((value) => {
        return <p key={value.id}>{value.name}</p>;
      })}
    </div>
  );
}

export default UseEffectDemo;
