import React, { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState("");

  console.log("A");

  useEffect(() => {
    console.log("B");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setUsers(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log("C");

  return (
    <div>
      {users?.map((value, index) => {
        return <p key={value.id}>{value.name}</p>;
      })}
    </div>
  );
}

export default Home;
