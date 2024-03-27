import React from "react";
import useFetch from "../../customHooks/useFetch";

function UseEffectFetchDemo() {
  const {
    loading,
    data: users, // Alias
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h1>Loading...</h1>;
  if ((!loading && error) || !users) return <h1>Error...</h1>;
  return (
    <div>
      {users.map((value) => (
        <p>{value.name}</p>
      ))}
    </div>
  );
}

export default UseEffectFetchDemo;
