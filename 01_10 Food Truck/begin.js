/*
  WRITE YOUR SOLUTION HERE
*/

function foodTruckFestival(menus) {
  let flatmenus = menus.flat();

  let combinedMenus = new Set();
  flatmenus.forEach((item) => {
    combinedMenus.add(item);
  });

  const menuNode = document.querySelector("#combined-menu");
  for (let item of combinedMenus) {
    let foodNode = document.createElement("li");
    foodNode.innerText = item;
    menuNode.appendChild(foodNode);
  }
}

foodTruckFestival([['Tacos', 'Burgers'], ['Pizza'], ['Burgers', 'Fries']]);