let boxSwitch = [];
let boxCheck = [];
let scoreCard = 0;
// let button = document.querySelectorAll(".Square");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
var start = document.querySelector(".start-button");
var reset = document.querySelector(".reset");

//when index is called, do something
//have scorecard change with index.html
//have timer change with index.html

//when clicked, add box to an array which will check for correction
function playerCheck() {
  if (boxSwitch.length === boxCheck.length) {
    if (boxSwitch === boxCheck) {
      console.log("issa match");
    }
  }
}
//remove event listener
function actBox1() {
  one.classList.toggle("active");
  timer(actBox1, 300);
}
function actBox2() {
  two.classList.toggle("active");
  timer(actBox2, 300);
}
function actBox3() {
  three.classList.toggle("active");
  timer(actBox3, 300);
}
function actBox4() {
  four.classList.toggle("active");
  timer(actBox4, 300);
}
function timer() {
  setTimeout(timer, 300);
  // actBox1();
  // console.log("hey");
  //recursion function
}

//setTimeout
reset.addEventListener("click", function(e) {
  boxSwitch = [];
  // button.classList.remove("active");
  one.classList.remove("active");
  two.classList.remove("active");
  three.classList.remove("active");
  four.classList.remove("active");
  console.log("this is clicked");
});
//userinput and recursion
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
    setTimeout(actBox1, 500);
  }
  if (boxSwitch.length > 0 && boxSwitch[0] == 1) {
    setTimeout(actBox2, 500);
  }
  if (boxSwitch.length > 0 && boxSwitch[0] == 2) {
    setTimeout(actBox3, 500);
  }
  if (boxSwitch.length > 0 && boxSwitch[0] == 3) {
    setTimeout(actBox4, 500);
  }
});

//Player input below
one.addEventListener("click", function(e) {
  boxCheck.push(0);
  console.log(boxCheck);
});
two.addEventListener("click", function(e) {
  boxCheck.push(1);
  console.log(boxCheck);
});
three.addEventListener("click", function(e) {
  boxCheck.push(2);
  console.log(boxCheck);
});
four.addEventListener("click", function(e) {
  boxCheck.push(3);
  console.log(boxCheck);
});
//think in phases: Pattern, Player, NewRound
//how to push user input into new array
//relate .one .two .three .four to 0 1 2 3 in an array
//research array positions and how to call them

//getNum code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
