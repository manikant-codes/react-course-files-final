export function getNewsAticles(query = "india", page = 1) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&pageSize=10&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API}`
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
