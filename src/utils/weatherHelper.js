export function kelvinToCelcius(kelvin) {
  return Math.round(kelvin - 273.15);
}

export function getIcon(icon) {
  if (!icon) {
    return "/images/01d.png";
  }
  return `/images/${icon.slice(0, 2)}d.png`;
}

export function getUniqueDays(list) {
  return list.filter((value, index, array) => {
    if (index % 8 === 0) {
      return true;
    }
    return false;
  });
}
