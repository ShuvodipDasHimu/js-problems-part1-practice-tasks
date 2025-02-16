function longestWord(string){
  let string2 = string.split(" ");
  let longest = 0;
  let longestWord = null;
  for(let i = 0; i < string2.length; i++){
    if(longest < string2[i].length){
      longest = string2[i].length;
      longestWord = string2[i];
    }
  }
  return longestWord;
}

let str = "I am learning Programming to become a programmer";
console.log(longestWord(str));