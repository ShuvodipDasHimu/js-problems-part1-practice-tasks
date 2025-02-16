
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function countNumbers(array, findNumber){
  let count = 0;

  for(let i = 0; i < array.length; i++){
    if(array[i] === findNumber){
      count++;
    }
  }
  return count;
}

let numbers = [5,6,11,12,98, 5];
console.log(countNumbers(numbers, 5));
console.log(countNumbers(numbers, 25));