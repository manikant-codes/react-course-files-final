export function getPokemonNumber(id) {
  return "#" + id.toString().padStart(4, "0");
}
