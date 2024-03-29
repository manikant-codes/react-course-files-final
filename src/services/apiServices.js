export function fetchPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const promises = data.results.map((value) => {
        return fetch(value.url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
      });
      return promises;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
