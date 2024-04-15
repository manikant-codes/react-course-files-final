import { PAGE_SIZE } from "../constants";
import { myFetch } from "../helpers/fetchHelper";

// export function getPokemons(page) {
//   const limit = PAGE_SIZE;
//   const offset = (page - 1) * limit;
//   return fetch(
//     `https://pokeapi.co/api/v2/pokemon?offset=${offset}&&limit=${limit}`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const results = data.results;
//       const promises = [];
//       for (let i = 0; i < results.length; i++) {
//         const pokemonPromise = fetch(results[i].url)
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             return data;
//           })
//           .catch((error) => {
//             console.log("Error: ", error);
//           });
//         promises.push(pokemonPromise);
//       }

//       return Promise.all(promises);
//     })
//     .catch((error) => {
//       throw new Error(error.message);
//     });
// }

export async function getPokemons(page) {
  const limit = PAGE_SIZE;
  const offset = (page - 1) * limit;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&&limit=${limit}`
    );

    const data = await response.json();

    const results = data.results;

    const pokemons = [];

    for (let i = 0; i < results.length; i++) {
      const response = await fetch(results[i].url);
      const data = await response.json();
      pokemons.push(data);
    }

    return pokemons;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

// export function getSinglePokemon(query) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       throw new Error(error.message);
//     });
// }

export async function getSinglePokemon(query) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

// export function getPokemonTypesDetails(types) {
//   const urls = types.map((value) => {
//     return value.type.url;
//   });

//   const promisesArray = [];

//   for (const value of urls) {
//     const promise = fetch(value)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         return data;
//       })
//       .catch((error) => {
//         throw new Error(error.message);
//       });

//     promisesArray.push(promise);
//   }

//   return Promise.all(promisesArray);
// }

export async function getPokemonTypesDetails(types) {
  const urls = types.map((value) => {
    return value.type.url;
  });

  const typesDetails = [];

  try {
    for (const value of urls) {
      const response = await fetch(value);
      const data = await response.json();
      typesDetails.push(data);
    }

    return typesDetails;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

// export function getPokemonEvolutions(url) {
//   return myFetch(url).then((data) => {
//     return myFetch(data.evolution_chain.url).then((data) => {
//       const names = getEvolutionsNames(data.chain);
//       return getEvolutionsDetails(names);
//     });
//   });
// }

export async function getPokemonEvolutions(url) {
  try {
    const speciesDetails = await myFetch(url);
    const evolutionChainDetails = await myFetch(
      speciesDetails.evolution_chain.url
    );
    const names = getEvolutionsNames(evolutionChainDetails.chain);
    const evolutionDetails = getEvolutionsDetails(names);

    return evolutionDetails;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
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

async function getEvolutionsDetails(names) {
  const pokemons = [];

  for (const value of names) {
    const pokemon = await getSinglePokemon(value);
    pokemons.push(pokemon);
  }

  return pokemons;
}

export async function getSpeciesDetails(url) {
  return await myFetch(url);
}
