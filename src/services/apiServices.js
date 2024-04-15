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

export function getPokemonEvolutions(url) {
  return myFetch(url).then((data) => {
    return myFetch(data.evolution_chain.url).then((data) => {
      console.log("Chain", data);
      const names = getEvolutionsNames(data.chain);
      const evolutionDetails = getEvolutionsDetails(names);
      return evolutionDetails;
    });
  });
}

function getEvolutionsNames(chain) {
  const names = [];

  function getName(param) {
    // if (param.evolves_to.length > 1) {
    //   for (const e of param.evolves_to) {
    //     if (e.evolves_to.length !== 0) {
    //       getName(e.evolves_to[0]);
    //     }
    //     names.push(e.species.name);
    //   }
    // } else {
    if (param.evolves_to.length !== 0) {
      getName(param.evolves_to[0]);
    }
    names.push(param.species.name);
    // }
  }

  getName(chain);

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

export function getSpeciesDetails(speciesURL) {
  return myFetch(speciesURL);
}
