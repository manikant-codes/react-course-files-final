import { PAGE_SIZE } from "../constants";
import { myFetch } from "../helpers/fetchHelper";

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

  for (const value of urls) {
    const promise = fetch(value)
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

export function getPokemonEvolutions(url) {
  return myFetch(url).then((data) => {
    return myFetch(data.evolution_chain.url).then((data) => {
      const names = getEvolutionsNames(data.chain);
      return getEvolutionsDetails(names);
    });
  });
}

function getEvolutionsNames(chain) {
  let names = [];

  function getData(param) {
    if (param.evolves_to.length !== 0) {
      getData(param.evolves_to[0]);
    }

    names.push(param.species.name);
  }

  getData(chain);

  names.reverse();
  return names;
}

function getEvolutionsDetails(names) {
  const promisesArray = [];

  for (const value of names) {
    const promise = getSinglePokemon(value);
    promisesArray.push(promise);
  }

  return Promise.all(promisesArray);
}
