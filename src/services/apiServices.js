export function getUsersData() {
  const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return users;
}
