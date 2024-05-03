export function getRecipeImage(step) {
  console.log(step);
  if (
    step.ingredients &&
    Array.isArray(step.ingredients) &&
    step.ingredients.length > 0
  ) {
    return step.ingredients[0].image.replace("100x100", "500x500");
  } else if (
    step.equipment &&
    Array.isArray(step.equipment) &&
    step.equipment.length > 0
  ) {
    return step.equipment[0].image.replace("100x100", "500x500");
  } else {
    return "";
  }
}
