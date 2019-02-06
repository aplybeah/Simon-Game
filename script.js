let boxSwitch = [];
let boxCheck = [];
let scoreCard = 0;
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
var start = document.querySelector(".start-button");

//when index is called, do something
//have scorecard change with index.html
//have timer change with index.html

//when clicked, add box to an array which will check for correction

start.addEventListener("click", function(e) {
  for (i = 0; i < 3; i++) {
    function getNum() {
      return Math.floor(Math.random() * (4 - 0)) + 0;
    }
    var x = getNum();
    boxSwitch.push(x);
    console.log(boxSwitch);
  }
  if (boxSwitch.length > 0 && boxSwitch[0] == 0) {
    //use Math.random and setInterval functions to create random instances of square color
    // one.style.backgroundColor = "red";
    one.classList.toggle("active");
    console.log("Checking the link");
  } else {
    // setInterval(3000);
    three.style.backgroundColor = "black";
    console.log("Condition not met");
  }
});
// link random integer to array index
function playerCheck() {
  if (boxSwitch === boxCheck) {
    console.log("issa match");
  }
}
//work with callback toggle
//think in phases: Pattern, Player, NewRound
//create method that compares my two arrays(strict comparison)
//how to push user input into new array
//relate .one .two .three .four to 0 1 2 3 in an array
//research array positions and how to call them

//getNum code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
