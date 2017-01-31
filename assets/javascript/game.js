//global variables
var solutionList = ["red","blue","green","yellow"];
var solution;
var solutionInterface;
var solutionLetters;
var remainingGuesses = 10;
var guessedLettersList=[];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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


// THIS IS THE KEYBOARD ENTRY EVENT
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed
  var guessedLetter = event.key;

// validate key against alphabet (has to be a letter to pass)
var alphabetIndex = alphabet.indexOf(guessedLetter)
if (alphabetIndex > -1) {
	// alert("alphabetIndex: " + alphabetIndex);

//decriment remaining guesses
  remainingGuesses = remainingGuesses - 1;
  document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;

//traverses array of solution letters (by length of array)
//if solution letter matches the guessed letter, the guessed letter is filled in in the solution interface
// -1 index is no match - otherwise is the index of place in array
for (i = 0; i < solutionLetters.length; i++) {
var solutionIndex = solutionLetters[i].indexOf(guessedLetter)
if (solutionIndex > -1) {
	solutionInterface.splice([i] ,1,guessedLetter);
}
}
document.getElementById("solutionInterface").innerHTML = "Solution Interface: " + solutionInterface;


//checks if guessed letter is on the guessed list.
// if it isn't - it's added (pushed) on the the variable
var alreadyGuessed = guessedLettersList.indexOf (guessedLetter);
if (alreadyGuessed > -1){
	return
}
else{
guessedLettersList.push(guessedLetter);
}

document.getElementById("guessedLettersList").innerHTML = "Guessed Letters: " + guessedLettersList;






// end of alphabet check
}
//END OF THE ENTRY EVENT
}