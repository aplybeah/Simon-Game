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
  //put delay between iteration, or get it to stop and wait for input
  setInterval(3000);
  function getNum() {
    return Math.floor(Math.random() * (4 - 0)) + 0;
  }
  var x = getNum();
  boxSwitch.push(x);
  console.log(boxSwitch);
}
// link random integer to array index
if (boxSwitch.length > 0 && boxSwitch[0] == 1) {
  one.style.backgroundColor = "red";
  console.log("Checking the link");
} else {
  three.style.backgroundColor = "black";
  console.log("Condition not met");
}

//use switch statement?
// switch (boxSwitch.length > 0 && boxSwitch[x] == 1) {
//   case boxSwitch[0]:
//     console.log("testing the output");
//     break;
//   case boxSwitch[1]:
//     console.log("this is case 2");
//     break;
//   default:
//     console.log("this is the default");
// }

// one.addEventListener("click", function(e) {
//   e.target.style.backgroundColor = "white";
// });

//getNum code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
