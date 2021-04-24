let password = "pass";
let attempts = 0;
let attemptsLimit = 3;
const output = document.querySelector("h1");
const input = document.querySelector("input");
const message = document.querySelector("p");
const button = document.querySelector("button");
const passwordInput = document.querySelector("#passwordInput");
let isLoggedin = false;

// Get the input field
var enter = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});

function authenticateUser() {
  if (input.value != password && !isLoggedin && attempts < attemptsLimit) {
    attempts++;
    console.log(attempts);
  } else if (input.value === password) {
    isLoggedIn = true;
    message.innerHTML = "You are logged in";
    passwordInput.style.display = "none";
    output.style.display = "inherit";
    output.innerHTML =
      "The answer to the ultimate question of life, the universe and everything is 42";
  } else {
    message.innerHTML = "Too many entries";
    passwordInput.style.display = "none";
  }
  input.value = "";
}
