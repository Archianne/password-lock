const input = document.querySelector("input");
const output = document.querySelector("#output");
const button = document.querySelector("button");
const form = document.querySelector("form");

let isLoggedin = false;
let password = "Pass";
let attempts = 0;
let attemptsLimit = 3;

//if password not created, prompt to insert password
//create a secret

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const authenticateUser = () => {
  if (input.value != password && !isLoggedin && attempts < attemptsLimit) {
    attempts++;
    console.log(attempts);
  } else if (input.value === password) {
    isLoggedIn = true;
    form.style.display = "none";
    output.style.display = "inherit";
    output.innerHTML = `The <span class="underline"> answer</span> to the ultimate question of life, the universe and everything is <span class="underline">42</span>`;
  } else {
    message.innerHTML = "Too many entries";
    form.style.display = "none";
  }
  input.value = "";
};
