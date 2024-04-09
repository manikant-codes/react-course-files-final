export function getStatsPercentage(stat) {
  return Math.round((stat * 100) / 255);
}

export function getBarHeight(stat) {
  const percentage = getStatsPercentage(stat);
  return Math.round((percentage * 200) / 100);
}
