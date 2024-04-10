import { PAGE_SIZE } from "../constants";

export function getPokemons(page) {
  const limit = PAGE_SIZE;
  const offset = (page - 1) * limit;

  return fetch(
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
      // console.log("promises", promises);
      const resolved = Promise.all(promises);
      // console.log("resolved", resolved);
      return resolved;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export function getSinglePokemon(query) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
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

export function getPokemonTypesDetails(types) {
  const urls = types.map((value) => {
    return value.type.url;
  });

  const promisesArray = [];

  for (const url of urls) {
    const promise = fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    promisesArray.push(promise);
  }

  return Promise.all(promisesArray);
}
