export function getWeatherData(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWA_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getMultiDayWeatherData(id) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_OWA_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
