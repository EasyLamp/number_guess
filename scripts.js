var generatedNumber = Math.floor(Math.random()*100+1);

function Main() {
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var playerGuess = parseInt(input.value);

  if (playerGuess > generatedNumber) {
<<<<<<< HEAD
    output.value="Flying too high! You just guessed " +input.value;
  } else if (playerGuess < generatedNumber) {
      output.value = "Aiming too low... You just guessed " + input.value;
=======
    output.value="Flying too high!";
  } else if (playerGuess < generatedNumber) {
      output.value = "Aiming too low...";
>>>>>>> f6469074e03ceea3872c857011ccbb794ed7b873
    } else if (playerGuess == generatedNumber) {
      output.value = "Shazam! Great work.";
    }
};

<<<<<<< HEAD
function ClearFields() {
    document.getElementById("input").value = "";
}

function resetG() {
  //reset guess value
  input.value = "";
  //set randomNumber to be a new random number
  generatedNumber = Math.floor(Math.random() * 100) + 1;
  //update output text field
  output.value="";
  //added to put function out of call stack
  return false;
}

=======
>>>>>>> f6469074e03ceea3872c857011ccbb794ed7b873


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

<<<<<<< HEAD
// submit.addEventListener ('click', function (){
//
//   parsInt(guess)
//
//   if (guess === randomNumber) "Shazam!";
//
//   else if (guess < randomNumber) "Aiming too low.";
//
//   else if (guess > randomNumber) "Flying too high"
// });
//
//
//
// clearButton.addEventListener('click', function () {
//   var guess = "";
// });
=======

submit.addEventListener ('click', function (){

  parsInt(input.value)

  if (guess === randomNumber) "Shazam!";

  else if (guess < randomNumber) "Aiming too low.";

  else if (guess > randomNumber) "Flying too high"
});



clearButton.addEventListener('click', function () {
  var guess = "";
});
>>>>>>> f6469074e03ceea3872c857011ccbb794ed7b873
