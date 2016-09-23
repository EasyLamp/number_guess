var generatedNumber = numberGenerator();
var submit = document.getElementById('playerButton');
var output = document.getElementById('output');
var input = document.getElementById('input');
var clearInputButton = document.getElementById('clearInput');
var grayResetButton = document.getElementById('resetButton');

console.log(generatedNumber);

submit.addEventListener('click', function (){
  main();
  clearFields();
  grayResetButton.disabled = false;
});

function main() {
  var playerGuess = parseInt(input.value);

  if (isNaN(playerGuess)){
    return output.innerText = "You have not guessed a number.";
  }
  if (playerGuess > 100) {
    return output.innerText = "Please guess within the range 1 - 100."
  }
  if (playerGuess < 1) {
    return output.innerText = "Please guess within the range 1 - 100."
  }

  if (playerGuess > generatedNumber) {
    output.innerText ="Flying too high! You just guessed " +input.value;
  } else if (playerGuess < generatedNumber) {
    output.innerText = "Aiming too low... You just guessed " + input.value;
  } else {
    output.innerText = "Shazam! Great work. Click Reset to play again.";
  }
}


function clearFields() {
  input.value = "";
  clearInputButton.disabled = true;
}

input.addEventListener("keyup", function (){

  if (input.value === ""){
     clearInputButton.disabled = true;
     grayResetButton.disabled = true;
  } else {
    clearInputButton.disabled = false;
    grayResetButton.disabled = false;
  }
});

function resetG() {
  input.value = "";
  generatedNumber = numberGenerator();
  output.innerText="";
  clearInputButton.disabled = true;
  grayResetButton.disabled = true;
  // return false;
}

function numberGenerator() {
  return Math.floor(Math.random() * 100) + 1;
}
