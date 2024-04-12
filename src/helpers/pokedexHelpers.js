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

function getPokemonWeight(weight) {
  return weight / 10;
}

function getPokemonHeight(height) {
  return height * 10;
}

function getWeaknesses(data) {
  let weaknesses = [];
  let strengths = [];

  for (const value of data) {
    weaknesses.push(value.damage_relations.double_damage_from);
    strengths.push(value.damage_relations.double_damage_to);
    strengths.push({ name: value.name });
  }

  weaknesses = weaknesses.flat().map((value) => {
    return value.name;
  });

  strengths = strengths.flat().map((value) => {
    return value.name;
  });

  weaknesses = weaknesses.filter((value) => {
    return !strengths.includes(value);
  });

  return weaknesses;
}

function getPokemonCategory(genera) {
  if (!genera) return "";

  const genus = genera.find((value) => {
    if (value.language.name === "en") {
      return value.genus;
    }
    return false;
  });

  if (genus) return genus.genus;

  return "N/A";
}

function getPokemonDesc(textEntries) {
  if (!textEntries) return "";
  let desc = textEntries.find((value) => value.language.name === "en");
  if (desc) {
    desc = desc.flavor_text.replaceAll("\f", " ");
    return desc;
  }
  return "N/A";
}

export {
  getPokemonImage,
  getPokemonHeight,
  getPokemonNumber,
  capitalizeStr,
  getPokemonAbilities,
  getWeaknesses,
  getPokemonWeight,
  getPokemonCategory,
  getPokemonDesc,
};
