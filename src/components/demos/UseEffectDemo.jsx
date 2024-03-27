import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [users, setUsers] = useState(null);

  console.log("A");

  useEffect(
    () => {
      console.log("B");

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const json = response.json();
          return json;
        })
        .then((data) => {
          console.log("data", data);
          setUsers(data);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } /*[users, count]*/
  );

  console.log("C");

  return <div>{users && users[0].name}</div>;
}

export default UseEffectDemo;
