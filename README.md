# JS 102: Password Protected

We are going to use our newfound JavaScript knowledge to make some information only available to people who know the password.

We will use:

- variables
- if statements
- loops
- functions

## Our Plan

- Prompt the user for input - a password in our case.
- Store that password in a variable for future use.
- Check whether the password matches the correct password:
  - If it does, reveal the information.
  - If it doesn't, let them try again.
  - If they fail three times in a row, do not allow them any more tries.

## Step 0 - Getting set up

Create an HTML and JS file in this repo in which to complete the following steps.

## Step 1 - Getting user input

We will the using `prompt` to "prompt" the user for an input:

```js
prompt("Please enter the password.");
```

We hand in what we want the prompt to say as an argument, and prompt returns us what the user inputted. At the moment we are not doing anything with the return value of `prompt`.

👉 Use the above code, but change it so that we save the return value in a variable\*.

_\*To check that this step is working, `console.log` the variable you have made to see if it contains what you've inputted._

## Step 2 - Using the input to determine behavior

Now that we have the user's input stored in a variable, we can check whether it is the correct password. If it is correct, we should then `alert` with some secret information.

```js
alert("My secret information here");
```

To check that our variable is equal to the correct password we can use `===`, the equality operator.

```js
userPassword === "myPassword1!";
```

The code above will resolve to true if the variable `userPassword` contains the string "myPassword1!".

👉 Use an if statement to `alert` your message only when the password is correct.

## Step 3 - try again!

We now want to let the user try again if the answer they entered was incorrect, but only for three times.

We can have the code loop around the part where we ask for the password using a while loop.

```js
while (condition) {
  // ask the user for the password
  // give secret and break the loop if correct
}
```

We only want to repeat our loop if the count of previous guesses is less than three.

This means that we will need to keep track of the number of attempts.

👉 Declare a variable at the top of your code called `attempts` with the value of `0`. We will add one to this variable each time the user makes an incorrect guess.

👉 Use the variable `attempts` in the condition of the while loop. We want the while loop to run as long as attempts are less than 3.

👉 If the user enters the wrong password, we want to add 1 to the attempts variable. If they are correct, we want to exit the loop.

## Step 4 - Functions

### New Plan

- Declare a function that will prompt the user for input - a password in our case. In this function, we want to:
  - Store that password in a variable within the function
  - Check whether the password matches the correct password:
    - If it does, return true from the function.
    - If it doesn't, let them try again.
    - If they fail three times in a row, do not allow them any more tries, and return false from the function.
- `console.log` a secret _only_ if the function returned true.

👉 Refactor the code you have written into a function called `authenticateUser`. Have that function return `true` if the user logged in successfully with the correct password and `false` if they got the password wrong more than three times. You can put most of the code you have already written in the previous steps into the function, but don't reveal the secret yet. The function should be used like this:

```js
function authenticateUser() {
  // prompt for password and handle login attempts here
}
// get answer here
let isLoggedIn = authenticateUser();

// you should reveal the secret after the function is called using the boolean isLoggedIn
```

## Step 5 - The End

Well done! You've successfully implemented a password checking system. Hopefully your secret information wasn't too embarrassing and your password was strong enough to keep it secret!

Next steps...

- Split up the functionality into more functions; each function should only do one thing.
- Let the user know how many attempts they have left.
- Delete the code (or parts of it) and practice remembering what you did and writing it out again, this will really help embed your new skills.
- Let your imagination run wild, and make something else using the same logic.
# password-lock
