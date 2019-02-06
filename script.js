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
function playerCheck() {
  if (boxSwitch === boxCheck) {
    console.log("issa match");
  }
}
function actBox1() {
  one.classList.toggle("active");
}
function actBox2() {
  two.classList.toggle("active");
}
function actBox3() {
  three.classList.toggle("active");
}
function actBox4() {
  four.classList.toggle("active");
}

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
    actBox1();
    console.log("Checking the link");
  }
  if (boxSwitch.length > 0 && boxSwitch[0] == 1) {
    actBox2();
  }
  if (boxSwitch.length > 0 && boxSwitch[0] == 2) {
    actBox3();
  }
  if (boxSwitch.length > 0 && boxSwitch[0] == 3) {
    actBox4();
  }
});

//think in phases: Pattern, Player, NewRound
//create method that compares my two arrays(strict comparison)
//how to push user input into new array
//relate .one .two .three .four to 0 1 2 3 in an array
//research array positions and how to call them

//getNum code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
