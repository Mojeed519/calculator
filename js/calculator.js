// buttons
const inputScreen = document.querySelector("#inputScreen");
const outputScreen = document.querySelector("#outputScreen");
const equal = document.querySelector("#result");
const plus = document.querySelector("#plus");
const subtract = document.querySelector("#subtract");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const pie = document.querySelector("#pie");
const square = document.querySelector("#square");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const erase = document.querySelector("#erase");
const clear = document.querySelector("#clear");

let emptyArr = [];

//display screen function
function displayInputScreen() {
  inputScreen.innerHTML = emptyArr.toString().replaceAll(",", "");
}
//result screen function
function displayResultScreen() {
  let result = eval(emptyArr.toString().replaceAll(",", ""));
  outputScreen.innerHTML = result;
}

// event listeners on buttons
// event listener on button one
document.addEventListener("DOMContentLoaded", function () {
  one.addEventListener("click", oneHandler);
});

function oneHandler() {
  emptyArr.push(1);
  displayInputScreen();
}
// event listener on button two
document.addEventListener("DOMContentLoaded", function () {
  two.addEventListener("click", twoHandler);
});

function twoHandler() {
  emptyArr.push(2);
  displayInputScreen();
}
// event listener on button two
document.addEventListener("DOMContentLoaded", function () {
  two.addEventListener("click", twoHandler);
});

function twoHandler() {
  emptyArr.push(2);
  displayInputScreen();
}
// event listener on button three
document.addEventListener("DOMContentLoaded", function () {
  three.addEventListener("click", threeHandler);
});

function threeHandler() {
  emptyArr.push(3);
  displayInputScreen();
}

// event listener on button four
document.addEventListener("DOMContentLoaded", function () {
  four.addEventListener("click", fourHandler);
});

function fourHandler() {
  emptyArr.push(4);
  displayInputScreen();
}

// event listener on button five
document.addEventListener("DOMContentLoaded", function () {
  five.addEventListener("click", fiveHandler);
});

function fiveHandler() {
  emptyArr.push(5);
  displayInputScreen();
}
// event listener on button six
document.addEventListener("DOMContentLoaded", function () {
  six.addEventListener("click", sixHandler);
});

function sixHandler() {
  emptyArr.push(6);
  displayInputScreen();
}
// event listener on button seven
document.addEventListener("DOMContentLoaded", function () {
  seven.addEventListener("click", sevenHandler);
});

function sevenHandler() {
  emptyArr.push(7);
  displayInputScreen();
}
// event listener on button eight
document.addEventListener("DOMContentLoaded", function () {
  eight.addEventListener("click", eightHandler);
});

function eightHandler() {
  emptyArr.push(8);
  displayInputScreen();
}
// event listener on button nine
document.addEventListener("DOMContentLoaded", function () {
  nine.addEventListener("click", nineHandler);
});

function nineHandler() {
  emptyArr.push(9);
  displayInputScreen();
}
// event listener on button zero
document.addEventListener("DOMContentLoaded", function () {
  zero.addEventListener("click", zeroHandler);
});

function zeroHandler() {
  emptyArr.push(0);
  displayInputScreen();
}


// event listener on button pie
document.addEventListener("DOMContentLoaded", function () {
  pie.addEventListener("click", pieHandler);
});

function pieHandler() {
  emptyArr.push("*3.14159");
  displayInputScreen();
}

// event listener on button dot
document.addEventListener("DOMContentLoaded", function () {
  dot.addEventListener("click", dotHandler);
});

function dotHandler() {
  emptyArr.push(".");
  displayInputScreen();
}

//event lisitner for Addition
document.addEventListener("DOMContentLoaded", function () {
  plus.addEventListener("click", plusHandler);
});

function plusHandler() {
  emptyArr.push("+");
  displayInputScreen();
}

//event lisitner for subtraction
document.addEventListener("DOMContentLoaded", function () {
  subtract.addEventListener("click", subtractHandler);
});

function subtractHandler() {
  emptyArr.push("-");
  displayInputScreen();
}

//event lisitner for division
document.addEventListener("DOMContentLoaded", function () {
  divide.addEventListener("click", divideHandler);
});

function divideHandler() {
  emptyArr.push("/");
  displayInputScreen();
}

//event lisitner for multiplication
document.addEventListener("DOMContentLoaded", function () {
  multiply.addEventListener("click", multiplyHandler);
});

function multiplyHandler() {
  emptyArr.push("*");
  displayInputScreen();
}

//event lisitner for square
document.addEventListener("DOMContentLoaded", function () {
  square.addEventListener("click", squareHandler);
});

function squareHandler() {
  emptyArr.push("**");
  displayInputScreen();
}

//event lisitner for equals to
document.addEventListener("DOMContentLoaded", function () {
  equal.addEventListener("click", equalHandler);
});

function equalHandler() {
  //displays input screen
  displayInputScreen();
  //displays result screen
  displayResultScreen();
}

//event lisitner for erase
document.addEventListener("DOMContentLoaded", function () {
  erase.addEventListener("click", eraseHandler);
});

function eraseHandler() {
  emptyArr.pop();
  displayInputScreen();
}

//event lisitner for clear
document.addEventListener("DOMContentLoaded", function () {
  clear.addEventListener("click", clearHandler);
});

function clearHandler() {
  emptyArr = [];
  displayInputScreen();
  outputScreen.innerHTML = 0

}

