const input = document.querySelector("input");
const output = document.querySelector("#output");
const message = document.querySelector("#message");
const button = document.querySelector("button");
const inputDiv = document.querySelector("#input-div");

let isLoggedin = false;
let password = "Pass";
let attempts = 0;
let attemptsLimit = 3;

//if password not created, prompt to insert password
//create a secret

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
    inputDiv.style.display = "none";
    output.style.display = "inherit";
    output.innerHTML =
      "The answer to the ultimate question of life, the universe and everything is 42";
  } else {
    message.innerHTML = "Too many entries";
    passwordInput.style.display = "none";
  }
  input.value = "";
}
