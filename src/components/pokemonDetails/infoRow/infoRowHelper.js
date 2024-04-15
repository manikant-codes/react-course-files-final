export function getAbilities(abilities) {
  return abilities
    .map((value) => {
      return value.ability.name;
    })
    .join(", ");
}

export function getDesc(textEntries) {
  if (!textEntries) return "";
  const desc = textEntries.find((value) => {
    return value.language.name === "en";
  });

  return desc.flavor_text.replaceAll("\f", " ");
}

export function getCategory(genera) {
  if (!genera) return "";
  const temp = genera.find((value) => {
    return value.language.name === "en";
  });

  return temp.genus;
}
