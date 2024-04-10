export function getWeaknesses(data) {
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
