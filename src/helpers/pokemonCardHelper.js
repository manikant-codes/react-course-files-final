function getPokemonNumber(id) {
  return "#" + id.toString().padStart(4, "0");
}

function capitalizeStr(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getPokemonImage(pokemon) {
  if (!pokemon) {
    return "/images.placeholder.svg";
  }
  return pokemon.sprites.other["official-artwork"].front_default;
}

export { getPokemonImage, getPokemonNumber, capitalizeStr };
