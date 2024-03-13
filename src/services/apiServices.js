// const response = fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=surat&appid=2927389bf8b98ec157aee52c9c1f5b73"
// )
//   .then((response) => {
//     console.log("response a", response);
//     return response.json();
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// response
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("response", response);

function getWeatherData(city) {
  let weather = null;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWA_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("error", error);
    });

  return weather;
}

export { getWeatherData };
