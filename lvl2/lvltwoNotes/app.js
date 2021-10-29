// Web Storage

// Setter - save data in local storage (key = value pairs)
localStorage.setItem("name", "steve");
localStorage.setItem("age", 10);
localStorage.setItem("isAlive", true);

// Saving an array to local storage...doesn't look like an array because the local storage needs JSON to turn it into a string, so have to use JSON.stringify
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]));
localStorage.setItem(
  "address",
  JSON.stringify({ street: "123 street", city: "SLC" })
);

// Getter-retrieve items, returns the data
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
const isAlive = localStorage.getItem("isAlive");
console.log(isAlive);
// Without JSON.parse, an array is pulled as a string - console.log(typeof friends) returns the word string. Need to add JSON.parse to turn the string into an array, object or other complex data types
const friends = JSON.parse(localStorage.getItem("friends"));
const address = JSON.parse(localStorage.getItem("address"));
console.log(address);

// Remove
localStorage.removeItem("age");

//localStorage is an object? so I don't have to use setItem or getItem...need to be define, so setItem and getItem are recommended
localStorage.dinosaur = "T-Rex";
console.log(localStorage.dinosaur);

// setTimeout and setInterval are higher order functions, which means they take a function as one of their arguments like we see below:

setTimeout(function () {}, 1000);

// The first argument is setting what should happen, the second argument is for setting the time. The above time argument is in an amount of milliseconds, meaning 1000 = 1 second.The setTimeout about will run the function adter 1 second has passed:

setTimeout(function () {
  console.log("hello!");
}, 1000);

// setTimeout is great for running a function once. To run a function on a repeated basis, use setInterval() method

// setInterval(function () {
//   console.log("hello");
// }, 1000);

// Tell my program to stop: 1. adject my original setInterval call and store it in a variable

// var intervalID = setInterval(function () {
//   console.log("hello");
// }, 1000);

// clearInterval(intervalID);

// The variable I assign works like an off switch. When I need to have an interval or timeout stop, call this method:
// clearTimeout(timeoutID);

var display = document.getElementById("time-display");

function getTime() {
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  display.textContent = `${hour}:${min}:${sec}`;
}

setInterval(getTime, 1000);

// Higher Order Functions: take a function as a parament and/or returns a function
//Higher Order array methods follow the first criteria as they require a function as a parameter

// This is the higher order function
function doMath(num1, num2, callback) {
  return callback(num1, num2);
}

// These are the callback functions
function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(doMath(5, 10, subtract));
console.log(doMath(2, 4, sum));

// .map returns a new array the same size as the input array
// allow me to take an array of data and create a new array of data from it.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const result = arr.map(function (num) {
  // arr[i]
  return num + 9;
});
console.log(result);

// ES6 version

// const result = arr.map((num) => num + 10);

const users = [{ name: "joe" }, { name: "steve" }, { name: "lisa" }];

const result2 = users.map(function (user) {
  return user.name;
});
console.log(result2);

// Sort Array Method - goes through each item in an array and sorts it

var words = ["bat", "pineapple", "drugs", "zebra", "ghost"];

console.log(words.sort());

// Array Filter Method

// Set Interval and Set TimeOut
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const timer = document.getElementById("timer");

let count = 0;
// Don't set intervalId to any value; access to global scope
let intervalId;
timer.textContent = count;

function incrementTimer() {
  count++;
  timer.textContent = count;
}
// Add event listener to the start button
startBtn.addEventListener("click", function () {
  intervalId = setInterval(incrementTimer, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});

// Error Handling

var input = "";

try {
  if (input == "") {
    throw "Input can not be empty";
  } else if (input.length > 5) {
    throw "Input is to big";
  } else {
    console.log("You code runs fine!");
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}
