export function getPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const results = data.results;
      const promises = [];
      for (const value of results) {
        const pokemonPromise = fetch(value.url)
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
      // console.log("promises", promises);
      const resolved = Promise.all(promises);
      // console.log("resolved", resolved);
      return resolved;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
