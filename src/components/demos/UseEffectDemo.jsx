import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [users, setUsers] = useState(null);

  console.log("A");

  useEffect(() => {
    console.log("B");
    console.log("Inside useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {});
  }, []);

  console.log("C");

  console.log("users", users);

  return <div>UseEffectDemo</div>;
}

export default UseEffectDemo;
