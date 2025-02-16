function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const num = getRandomNumber(10, 20);
console.log(num);

// console.log(Math.floor(Math.random() * (20 - 10 + 1) ) + 10);