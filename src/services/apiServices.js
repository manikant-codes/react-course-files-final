export function getPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const results = data.results;
      const promises = [];
      for (let i = 0; i < results.length; i++) {
        const pokemonPromise = fetch(results[i].url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
        promises.push(pokemonPromise);
      }

      return Promise.all(promises);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
