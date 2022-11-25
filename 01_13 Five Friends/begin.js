/*
  WRITE YOUR SOLUTION HERE
*/

// create an async function
async function getUsers() {

// Use fetch() with await to get data from the api at https://randomuser.me/api/?results=5

let friends = await fetch("https://randomuser.me/api/?results=5");
let data = await friends.json();

// get 5 medium sized thumbnails and append them to `<div id="timeline"></div>`

const timeline = document.querySelector("#timeline");

// variant on how foreach works from googled resources
data.results.forEach(friend => {

  let image = document.createElement("img");
  image.src = friend.picture.medium;
  console.log( image.src)
  timeline.appendChild(image);
  
});

}


getUsers();
