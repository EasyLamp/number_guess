var generatedNumber = numberGenerator();
var submit = document.getElementById('playerButton');
var output = document.getElementById('output');
var input = document.getElementById('input');

function main() {
  var playerGuess = parseInt(input.value);


  if (isNaN(playerGuess)){
    return output.innerText = "You have not guessed a number.";
  }
  if (playerGuess > 100) {
    return output.innerText = "Not an appropriate guess!!!"
  }
  if (playerGuess < 1) {
    return output.innerText = "Not an appropriate guess!!!"
  }

  if (playerGuess > generatedNumber) {
    output.innerText ="Flying too high! You just guessed " +input.value;
  } else if (playerGuess < generatedNumber) {
    output.innerText = "Aiming too low... You just guessed " + input.value;
  } else {
    output.innerText = "Shazam! Great work.";
  }
};

function clearFields() {
  input.value = "";
}

function resetG() {
  //reset guess value
  input.value = "";
  //set randomNumber to be a new random number
  generatedNumber = numberGenerator();
  //update output text field
  output.innerText="";
  //added to put function out of call stack
  return false;
}

function numberGenerator() {
  return Math.floor(Math.random() * 100) + 1;
}


// var guess = document.getElementById('#guessBox')
// var submit = document.querySelector('.pickNumber');
// var clearButton = document.querySelector('.clear');
// var input = document.querySelector('#guessBox')
// var number = 10

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// When a user clicks on "Guess A Number"
// get value from guessBox
// I want to store that value in a variable
// I already have a variable with a umber in it called var number
// Is user guess bigger than var number?
  // If yes : display "too high" somewhere on the page (where?!)
  // If no: display "too low" somewher *where?!)

// get value from input field javascript

submit.addEventListener('click', function (){
  main();
  clearFields()
});
//   parsInt(guess)
//   if (guess === randomNumber) "Shazam!";
//   else if (guess < randomNumber) "Aiming too low.";
//   else if (guess > randomNumber) "Flying too high"
// clearButton.addEventListener('click', function () {
//   var guess = "";
// });
// submit.addEventListener ('click', function (){
//   parsInt(input.value)
//   if (guess === randomNumber) "Shazam!";
//   else if (guess < randomNumber) "Aiming too low.";
//
//   else if (guess > randomNumber) "Flying too high"
// });
// clearButton.addEventListener('click', function () {
//   var guess = "";
