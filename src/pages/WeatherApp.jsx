import React from "react";

function WeatherApp() {
  const data = fetch("https://jsonplaceholder.typicode.com/users").then(() => {
    console.log("Data");
  });
  console.log("Here");
  return <div>WeatherApp</div>;
}

export default WeatherApp;
