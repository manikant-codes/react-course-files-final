export function getNewsAticles(query = "india") {
  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}
