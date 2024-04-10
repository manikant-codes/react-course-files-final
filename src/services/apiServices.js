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
        console.log("Error: ", error);
      });

    promisesArray.push(promise);
  }

  return Promise.all(promisesArray);
}

export function fetchPokemonEvolutions(url) {
  return myFetch(url).then((data) => {
    return myFetch(data.evolution_chain.url).then((data) => {
      console.log("evolutions", data);
      return fetchEvolutionChain(data.chain);
    });
  });
}

function fetchEvolutionChain(chain) {
  let pokemonsArray = [];

  function getData(param) {
    if (param.evolves_to.length !== 0) {
      getData(param.evolves_to[0]);
    }
    pokemonsArray.push(param.species);
  }

  getData(chain);

  pokemonsArray.reverse();

  pokemonsArray = pokemonsArray.map((value) => {
    return value.name;
  });

  const promisesArray = [];

  for (const name of pokemonsArray) {
    const promise = fetchSinglePokemon(name);
    promisesArray.push(promise);
  }

  return Promise.all(promisesArray);
}
