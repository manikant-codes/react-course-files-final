import React from "react";

function WeatherApp() {
  // const response = fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // response
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const response = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("response");

  return <div>WeatherApp</div>;
}

export default WeatherApp;
