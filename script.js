"use strict";

// Assignment 1
/* Loop over the arrays from 1- 200
    if the array is divisble by 6 and 8 print Shamstiidelab
     if its divisble by 6 print shams
    if it divisble by 8 print tiidelab
    if all the above condivistions doesnt work print rest of the numbers
*/

for (let i = 1; i <= 200; i++) {
  if (i % 6 == 0 && i % 8 == 0) {
    console.log(" ShamsTiidelab");
  } else if (i % 6 === 0) {
    console.log(" Shams");
  } else if (i % 8 == 0) {
    console.log("Tiidelab");
  } else {
    console.log(i);
  }
}

// Assinment 2

/*using a nexted loop
check for the odd and even numbers

*/


const gridSize = function (size) {
  let s = "";
  for (let row = 0; row < size; row++) {
    let odd = row % 2 == 0;
    if (odd) {
      s += " ";
    }
    for (let column = 0; column < size; column++) {
      s += "#";
    }
    // new line
    s += "\n";
  }
  return s;
};
console.log(gridSize(8));
