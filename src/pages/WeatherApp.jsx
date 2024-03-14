import React, { useState } from "react";
import { getUsersData } from "../services/apiServices";

function WeatherApp() {
  const [users, setUsers] = useState(null);

  if (!users) {
    const users = getUsersData()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }

  console.log("users", users);

  return <div>WeatherApp</div>;
}

export default WeatherApp;
