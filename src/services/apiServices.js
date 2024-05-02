export function getUsersData() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
}

export function getRandomRecepies() {
  return fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
}

export function getRecipeDetails() {
  const promise = fetch(
    `https://api.spoonacular.com/recipes/716431/information?includeNutrition=true&apiKey=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error: ", error);
      // throw new Error(error.message);
    });

  return promise;
}
