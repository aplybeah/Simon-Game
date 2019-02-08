let boxSwitch = [];
let boxCheck = [];
let scoreCard = 0;
let score = document.querySelector(".score");
let button = document.querySelectorAll(".square");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
var start = document.querySelector(".start-button");
var reset = document.querySelector(".reset");
var turnCounter = 0;

let t = 0;
function timer() {
  if (t < 7) {
    button[0].classList.toggle("active");
    // button[1].classList.toggle("active");
    // button[2].classList.toggle("active");
    // button[3].classList.toggle("active");
    // button[i].classList.toggle("active");
    t++;
    console.log(t);
    setTimeout(timer, 900);
  }
}

// function actBox1() {
//   one.classList.add("active");
//   // timer(actBox1);
//   // setTimeout(actBox1, 500);
// }
// function actBox2() {
//   two.classList.add("active");
//   // timer(actBox2);
//   // setTimeout(actBox2, 500);
// }
// function actBox3() {
//   three.classList.add("active");
//   // timer(actBox3);
//   // setTimeout(actBox3, 500);
// }
// function actBox4() {
//   four.classList.add("active");
//   // timer(actBox4);
//   // setTimeout(actBox4, 500);
// }
// function timer() {
//   clock = setTimeout(timer, 300);
//   clock;
//   // console.log("hey");
// }
// function stopTimer() {
//   clearTimeout();
// }
//make another for loop, with increasing timeout, with the index

reset.addEventListener("click", function(e) {
  location.reload(true);
});
//userinput and recursion
function addScore() {
  scoreCard += 1;
  score.innerHTML = scoreCard;
}
function wrongAnswer() {
  scoreCard -= 1;
  score.innerHTML = scoreCard;
}

function playerCheck() {
  if (boxSwitch.length > 2 && boxCheck.length === boxSwitch.length) {
    if (boxSwitch.indexOf(i) === boxCheck.indexOf(i)) {
      // if (boxSwitch[i] === boxCheck[i]) {
      addScore();
      console.log("its a match");
      turnCounter += 1;
      console.log(turnCounter);
      boxCheck = [];
      newTurn();
    } else {
      wrongAnswer();
      location.reload(true);
    }
  }
  return turnCounter;
}
function genArray() {
  for (i = 0; i < 3; i++) {
    function getNum() {
      return Math.floor(Math.random() * (4 - 0)) + 0;
    }
    playerCheck();
    var x = getNum();
    boxSwitch.push(x);
    linkAttempt(x);
    console.log(boxSwitch);
  }
}
function newTurn() {
  if (turnCounter > 0) {
    boxCheck = [];
    genArray();
    console.log(boxCheck);
  }
}

start.addEventListener("click", function(e) {
  genArray();
  console.log(boxSwitch);
});

function linkAttempt(x) {
  if (boxSwitch[0] == 0) {
    button[0].classList.toggle("active");

    console.log("zero");
  }
  if (boxSwitch[1] == 1) {
    button[1].classList.toggle("active");

    console.log("one");
  }
  if (boxSwitch[2] == 2) {
    button[2].classList.toggle("active");

    console.log("two");
  }
  if (boxSwitch[3] == 3) {
    button[3].classList.toggle("active");

    console.log("three");
  }
  // timer();
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

//getNum code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
