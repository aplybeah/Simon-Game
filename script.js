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

//remove event listener
function actBox1() {
  one.classList.toggle("active");
  // timer();
  setTimeout(actBox1, 500);
}
function actBox2() {
  two.classList.toggle("active");
  // timer();
  setTimeout(actBox2, 500);
}
function actBox3() {
  three.classList.toggle("active");
  // timer();
  setTimeout(actBox3, 500);
}
function actBox4() {
  four.classList.toggle("active");
  // timer();
  setTimeout(actBox4, 500);
}
function timer() {
  clock = setTimeout(timer, 300);
  // console.log("hey");
}
function stopTimer() {
  clearTimeout(clock);
}
//setTimeout
reset.addEventListener("click", function(e) {
  boxSwitch = [];
  boxCheck = [];
  one.classList.remove("active");
  two.classList.remove("active");
  three.classList.remove("active");
  four.classList.remove("active");
  // stopTimer();
  // button.classList.remove("active");
  console.log("this is clicked");
});
//userinput and recursion
start.addEventListener("click", function(e) {
  for (i = 0; i < 3; i++) {
    function getNum() {
      playerCheck();
      return Math.floor(Math.random() * (4 - 0)) + 0;
    }
    var x = getNum();
    boxSwitch.push(x);
    console.log(boxSwitch);
  }
  boxSwitch.forEach(linkAttempt);
});

function linkAttempt(x) {
  // console.log("testing the forEach loop");
  if (x == 0) {
    // actBox1();
    console.log("zero");
  }
  if (x == 1) {
    // actBox2();
    console.log("one");
  }
  if (x == 2) {
    console.log("two");
    // actBox3();
  }
  if (x == 3) {
    console.log("three");
    // actBox4();
  }
}
//Player input below
//array.length
function playerCheck() {
  if (boxSwitch.length === 3 && boxCheck.length === 3) {
    boxSwitch[i] === boxCheck[i];
    console.log("issa match");
  }
}

one.addEventListener("click", function(e) {
  boxCheck.push(0);
  playerCheck();
  console.log(boxCheck);
});
two.addEventListener("click", function(e) {
  boxCheck.push(1);
  playerCheck();
  console.log(boxCheck);
});
three.addEventListener("click", function(e) {
  boxCheck.push(2);
  playerCheck();
  console.log(boxCheck);
});
four.addEventListener("click", function(e) {
  boxCheck.push(3);
  playerCheck();
  console.log(boxCheck);
});

//when clicked, add box to an array which will check for correction
//think in phases: Pattern, Player, NewRound

//getNum code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
