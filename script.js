let screenValue = "";

function input(value) {
  if (screenValue === "0") screenValue = ""; // Remove leading zero
  screenValue += value;
  document.getElementById("screen").innerText = screenValue;
}

function clearScreen() {
  screenValue = "0";
  document.getElementById("screen").innerText = screenValue;
}

function calculate() {
  try {
    screenValue = eval(screenValue).toString();
  } catch (error) {
    screenValue = "Error";
  }
  document.getElementById("screen").innerText = screenValue;
}
