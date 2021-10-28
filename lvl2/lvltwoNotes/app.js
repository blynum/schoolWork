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
