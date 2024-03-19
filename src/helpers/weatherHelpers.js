export function kelvinToCelcius(temperature) {
  if (!temperature) return 0;
  return `${Math.round(temperature - 273.15)}°`;
}

export function getFourDaysData(list) {
  return list.filter((value, index) => {
    if (index === 0 || index % 8 === 0) {
      return true;
    }
    return false;
  });
}

export function getWeatherIcon(weather) {
  const icon = weather?.weather[0]?.icon;
  if (!icon) return "/images/01d.png";
  return `/images/${icon.slice(0, 2)}d.png`;
}
