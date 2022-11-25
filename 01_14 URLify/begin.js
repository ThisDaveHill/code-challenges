/*
  WRITE YOUR SOLUTION HERE
*/

function Urlify(title) {
  let blogTitle = title.toLowerCase();
  blogTitle = blogTitle.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  blogTitle = blogTitle.replace(/\s+/g, '-');
 console.log(blogTitle);
}


let title = "I'm Dave, and I don't know how to speak Mandarin";
Urlify(title);