let boxSwitch = [];
let boxCheck = [];
let scoreCard = 0;
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");

//when index is called, do something
//use Math.random and setInterval functions to create random instances of square color
//have scorecard change with index.html
//have timer change with index.html

//when clicked, add box to an array which will check for correction
for (i = 0; i < 10; i++) {
  function getNum() {
    return Math.floor(Math.random() * (8 - 0)) + 0;
  }
  var x = getNum();
  console.log(x);
  boxSwitch.push(x);
  console.log(boxSwitch);
}
// link random integer to array index

//use switch statement?
// switch()
// one.addEventListener("click", function(e) {
//   e.target.style.backgroundColor = "white";
// });

//getNum code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
