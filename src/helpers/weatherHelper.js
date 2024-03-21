const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getDayWiseData(list) {
  return list.filter((value, index) => {
    if (index % 8 === 0) {
      return true;
    }
    return false;
  });
}

export function kelvinToCelcius(kelvin) {
  return `${Math.round(kelvin - 273.15)}°`;
}

export function getWeatherIcon(weather) {
  if (!weather) {
    return "/images/01d.png";
  }
  return `/images/${weather.weather[0].icon.slice(0, 2)}d.png`;
}

export function getWeatherCondition(weather) {
  if (!weather) {
    return "N/A";
  }
  return weather.weather[0].main;
}

export function getDayFormDate(dateStr) {
  const dayIndex = new Date(dateStr.split(" ")[0]).getDay();
  return daysOfWeek[dayIndex];
}
