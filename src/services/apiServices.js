export function getUsersData() {
  const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return users;
}

export function getWeatherData(city) {
  const promise = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWA_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

  return promise;
}
