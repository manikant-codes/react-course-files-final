const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getDateObject(dateTimeString) {
  console.log("dateTimeString", dateTimeString);
  return new Date(dateTimeString.split(" ")[0]);
}

export function getDayOfWeek(date) {
  return days[date.getDay()];
}
