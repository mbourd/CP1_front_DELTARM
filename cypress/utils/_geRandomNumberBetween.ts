export function _getRandomNumberBetween(
  min: number,
  max: number,
  round = true,
) {
  return round
    ? Math.round(Math.random() * (max - min) + min)
    : Math.random() * (max - min) + min;
}
