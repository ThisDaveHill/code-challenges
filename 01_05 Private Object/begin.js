/*
  WRITE YOUR SOLUTION HERE
*/


const username = Symbol("username");
const password = Symbol("password");

const user =  {
  [username]: "dh1120",
  [password]: "123456789",
  age: 44,
};

console.log(user.username);