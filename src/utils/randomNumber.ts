export function randomNumber(min: number, max: number, correction = 0) {
  return Math.floor((Math.random() - correction) * (max - min + 1)) + min
}
