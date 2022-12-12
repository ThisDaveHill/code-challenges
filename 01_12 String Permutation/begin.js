/*
  WRITE YOUR SOLUTION HERE
*/

function permutations(letters) {
 if (letters.length === 1) {
  return 1;
 }

 return letters.length * permutations(letters.slice(1));
}

console.log(permutations("practically"));