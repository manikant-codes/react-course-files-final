export function getPokemonImage(pokemon) {
  if (!pokemon) return "/images/placeholder.svg";
  return pokemon.sprites.other["official-artwork"].front_default;
}

export function getPokemonNumber(id) {
  return "#" + id.toString().padStart(4, "0");
}

export function capitalizeStr(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function getPokemonAbilities(abilities) {
  return abilities
    .map((value) => {
      return value.ability.name;
    })
    .join(", ");
}

export function getPokemonWeaknesses(data) {
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

export function getStatName(name) {
  if (name.includes("-")) {
    const temp = name.split("-");
    return `${temp[0].slice(0, 2)}. ${temp[1]}`;
  }
  return name;
}

export function getPokemonCategory(genera) {
  if (!genera) return "";

  let category = genera.find((value) => {
    return value.language.name === "en";
  });

  if (category) {
    return (category = category.genus);
  }

  return "N/A";
}

export function getPokemonDesc(flavorTextEntries) {
  if (!flavorTextEntries) return "";

  let desc = flavorTextEntries.find((value) => {
    return value.language.name === "en";
  });

  if (desc) {
    return (desc = desc.flavor_text.replaceAll("\f", " "));
  }

  return "Nothing to show!";
}
