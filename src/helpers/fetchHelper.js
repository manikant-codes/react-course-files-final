// export function myFetch(url) {
//   return fetch(url)
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

export async function myFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
