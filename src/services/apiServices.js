import { PAGE_SIZE } from "../constants";

export function fetchPokemons(page) {
  const limit = PAGE_SIZE;
  const offset = (page - 1) * limit;

  const pokemons = fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&&limit=${limit}`
  )
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
      return Promise.all(promises);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

  return pokemons;
}

export function fetchSinglePokemon(query) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
