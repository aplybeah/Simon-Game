// console.log("HELLO WORLD");
//create an array for the squares
let boxSwitch = [];
let boxCheck = [];
let scoreCard = 0;
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
//use Math.random() to create a random integer
// link random integer to array index
//when index is called, do something
//use Math.random and setInterval functions to create random instances of square color
//have scorecard change with index.html
//have timer change with index.html
//use a for loop???
//when clicked, add box to an array which will check for correction
function getNum() {
  min = Math.ceil(0);
  max = Math.floor(8);
  return Math.floor(Math.random() * (8 - 0)) + 0;
}
console.log(getNum());
// one.addEventListener("click", function(e) {
//   e.target.style.backgroundColor = "white";
// });

//getNum code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
