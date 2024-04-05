function getPokemonNumber(id) {
  return "#" + id.toString().padStart(4, "0");
}

function capitalizeStr(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getPokemonImage(pokemon, showAnimated) {
  if (!pokemon) {
    return "/images.placeholder.svg";
  }
  if (showAnimated) {
    return pokemon.sprites.other["showdown"].front_default;
  }
  return pokemon.sprites.other["official-artwork"].front_default;
}

function getPokemonAbilities(abilities) {
  return abilities
    .map((value) => {
      return value.ability.name;
    })
    .join(", ");
}

export {
  getPokemonImage,
  getPokemonNumber,
  capitalizeStr,
  getPokemonAbilities,
};
