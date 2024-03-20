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

export function getMultiDayWeatherData(id) {
  const promise = fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_OWA_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {});

  return promise;
}
