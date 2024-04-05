export function getAbilities(abilities) {
  return abilities
    .map((value) => {
      return value.ability.name;
    })
    .join(", ");
}
