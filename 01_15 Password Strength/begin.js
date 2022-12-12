/*
  WRITE YOUR SOLUTION HERE
*/


//One lowercase letter regex
const lowerCase = /[a-z]+/g;

//One  regex
const upperCase = /[A-Z]+/g;

//One special character (!@#\$%^&\*) regex
const specialChar = /[!@#\$%^&\*]+/g;

//One number regex
const Number = /\d/g;

//At least 8 characters long regex
function checkPass(password) {
  let length = password.length;
  if (!length >= 8) {
    return "Passsword neees to be at least 8 characters long";
  };

  if (password.match(lowerCase) < 1 ) {
      return  " Password neeeds at least one lowercase letter"
  };
  
  if (password.match(upperCase) < 1 ) {
    return  " Password neeeds at least one uppercase letter"
  };
  
  if (password.match(specialChar)< 1) {
    return  " Password neeeds at least one special character"
  };
  
  if (password.match(Number) < 1) {
    return  " Password neeeds at least one number"
  }

  return "Valid password."
  
}

console.log(checkPass("jkiUyt@3"));