import React, { useEffect, useState } from "react";
import UserData from "./components/demo/useEffectDemo/UserData";

function Demo() {
  const [users, setUsers] = useState(null);

  console.log("1");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("2");
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    // console.log("After rendering!");
  }, []);

  console.log("3");

  if (!users) return null;

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "12px",
        padding: "32px",
      }}
    >
      {users.map((user) => {
        return <UserData key={user.id} user={user} />;
      })}
    </ul>
  );
}

export default Demo;
