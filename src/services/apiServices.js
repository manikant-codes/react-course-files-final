import { PAGE_SIZE } from "../constants";
import { myFetch } from "../helpers/fetchHelper";

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
      throw new Error(error.message);
    });

  return pokemons;
}

export function fetchSinglePokemon(query) {
  query = typeof query === "number" ? query : query.toLowerCase();
  return fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

export function fetchPokemonWeaknesses(types) {
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
        throw new Error(error.message);
      });

    promisesArray.push(promise);
  }

  return Promise.all(promisesArray);
}

export function fetchPokemonEvolutions(url) {
  return myFetch(url)
    .then((data) => {
      return myFetch(data.evolution_chain.url)
        .then((data) => {
          const names = getEvolutionsNames(data.chain);
          const details = getEvolutionsDetails(names);
          return details;
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

function getEvolutionsNames(chain) {
  let names = [];

  // function getData(param) {
  //   if (param.evolves_to.length !== 0) {
  //     getData(param.evolves_to[0]);
  //   }
  //   pokemonsArray.push(param.species.name);
  // }

  // getData(chain);

  while (chain.evolves_to.length !== 0) {
    names.push(chain.species.name);
    chain = chain.evolves_to[0];
  }

  names.push(chain.species.name);

  return names;
}

function getEvolutionsDetails(names) {
  const promisesArray = [];

  for (const name of names) {
    const promise = fetchSinglePokemon(name);
    promisesArray.push(promise);
  }

  return Promise.all(promisesArray);
}

export function fetchSpeciesDetails(url) {
  return myFetch(url);
}
