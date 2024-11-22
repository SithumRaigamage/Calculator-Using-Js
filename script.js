let screenValue = "";
let userInput = ""; // To store the user's input expression

function input(value) {
  if (screenValue === "0") screenValue = ""; // Remove leading zero
  screenValue += value;
  userInput = screenValue; // Update the input expression
  document.getElementById("screen").innerText = screenValue;
  document.getElementById("user-input").innerText = userInput; // Display user input in summary
}

function clearScreen() {
  screenValue = "0";
  userInput = "";
  document.getElementById("screen").innerText = screenValue;
  document.getElementById("user-input").innerText = "0"; // Reset input display
  document.getElementById("user-answer").innerText = "0"; // Reset answer display
}

function calculate() {
  try {
    screenValue = eval(screenValue).toString();
    document.getElementById("screen").innerText = screenValue;
    document.getElementById("user-answer").innerText = screenValue; // Display the answer in summary
  } catch (error) {
    screenValue = "Error";
    document.getElementById("screen").innerText = screenValue;
    document.getElementById("user-answer").innerText = "Error"; // Display error in summary
  }
}
