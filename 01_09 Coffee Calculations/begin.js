/*
  WRITE YOUR SOLUTION HERE
*/


function CoffeeMeetUp(coffeeArr) {
  let coffeeSum = coffeeArr.reduce(
    (totalCoffes, numCoffees) => (totalCoffes += numCoffees)
  )
  return `The total bill is $${coffeeSum * 1.25}`
}

console.log(
  CoffeeMeetUp([2, 5, 7, 1, 4])
)