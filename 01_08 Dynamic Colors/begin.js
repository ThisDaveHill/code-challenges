/*
  WRITE YOUR SOLUTION HERE
*/

function changeColour(colour)   {
 return function() {
  document.body.style.background = colour;
 }
}

const bgBlue = changeColour("#336699");
const bgPink = changeColour("#E9D3E2");
const bgGreen = changeColour("#0CC075");

document.querySelector("#blue").addEventListener("click", bgBlue);
document.querySelector("#pink").addEventListener("click", bgPink);
document.querySelector("#green").addEventListener("click", bgGreen);