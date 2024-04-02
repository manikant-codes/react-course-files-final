// export function fetchPokemons() {
//   return fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const promises = data.results.map((value) => {
//         return fetch(value.url)
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             return data;
//           })
//           .catch((error) => {
//             console.log("Error: ", error);
//           });
//       });
//       return Promise.all(promises);
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//     });
// }

export function fetchPokemons() {
  const pokemons = fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const promises = [];
      for (let i = 0; i < data.results.length; i++) {
        const result = fetch(data.results[i].url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log("Error: ", error);
          });

        promises.push(result);
      }
      return Promise.all(promises);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

  return pokemons;
}
