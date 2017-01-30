//global variables
var solutionList = ["red","blue","green","yellow"];
var solution;
var solutionInterface;
var solutionLetters;
var remainingGuesses = 11;
var guessedLettersList=[];

 // Randomly chooses a choice from the solution list array.
 solution = solutionList[Math.floor(Math.random() * solutionList.length)];
  // alert( "solution: " + solution);

//splits word into array
solutionLetters = solution.split("");

 // alert( "solutionLetters: " + solutionLetters);
 document.getElementById("solutionArray").innerHTML = "Solution array: " + solutionLetters;

//build the interface element for the guessed letters
 solutionInterface = [];
 for (i = 0; i < solutionLetters.length; i++) {
 	solutionInterface.push("_");
 }




// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed
  var winner;
  var guessedLetter = event.key;

  remainingGuesses = remainingGuesses - 1;

  document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;


//if the indesx is >0, the geuessed letter exists in the solution
var solutionIndex = solutionLetters.indexOf(guessedLetter)
if (solutionIndex > -1) {
solutionInterface.splice(solutionIndex ,1,guessedLetter);
}

 document.getElementById("solutionInterface").innerHTML = "Solution Interface: " + solutionInterface;

  var alreadyGuessed = guessedLettersList.indexOf (guessedLetter);
// alert("guessed index: " + alreadyGuessed);
if (alreadyGuessed > 0){
	return
}

guessedLettersList.push(guessedLetter);
 //    // Alerts the key the user pressed (userGuess).
    // alert("user guesses: " + guessedLettersList);

    document.getElementById("guessedLettersList").innerHTML = "Guessed Letters: " + guessedLettersList;







}