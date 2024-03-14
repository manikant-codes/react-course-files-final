function getWeatherData(city) {
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
      console.log("error", error);
    });

  return promise;
}

function getMultiDayWeatherData(lat, lon, cnt) {
  console.log("process.env.REACT_APP_OWA_KEY", process.env.REACT_APP_OWA_KEY);
  const promise = fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OWA_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return promise;
}

export { getWeatherData, getMultiDayWeatherData };
