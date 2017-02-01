//global variables
var solutionList = [
["red","A warmy primary color"],
["blue","A cool primary color"],
["green","A verdant primary color"],
["yellow", "A chicken color"]
];
var solution;
var solutionHint;
var solutionInterface;
var solutionLetters;
var remainingGuesses = 10;
var guessedLettersList=[];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var gameOver=0;
var wins =0;
var losses=0;

//display wins/losses
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;

 // Randomly chooses a choice from the solution list array.
 myRandom = Math.floor(Math.random() * solutionList.length);
 //insert random into solution and hint vars
 	solution = solutionList[myRandom][0];
  // alert( "solution: " + solution);
  	solutionHint = solutionList[myRandom][1];
 	 document.getElementById("solutionHint").innerHTML = "Hint: " + solutionHint;

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
  // var guessedLetter = event.key;

// stops see keys if game over
  if (gameOver === 1) {
document.getElementById("solutionArray").innerHTML = "Press any key to play again.";
// gameOver = 0;

  }
else	{



var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();

// validate key against alphabet (has to be a letter to pass)
var alphabetIndex = alphabet.indexOf(guessedLetter)
if (alphabetIndex > -1) {
	// alert("alphabetIndex: " + alphabetIndex);

//decriment remaining guesses
remainingGuesses = remainingGuesses - 1;
document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;

// game over if guesses = 0
if (remainingGuesses == 0) {
	document.getElementById("guessedLettersList").innerHTML = "Game Over - Loser!";
	losses = losses + 1;
	gameOver = 1;
}
// alert("remainingGuesses: " + remainingGuesses);

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



// checks to see if any blanks in the solution interface - where the guesses go
// if no blanks, all letters are filled, thus a winner
var countSolutionBlanks = solutionInterface.indexOf ("_");
if (countSolutionBlanks == -1) {
	document.getElementById("guessedLettersList").innerHTML = "Game Over - You win!";
	wins = wins + 1;
	gameOver = 1;
}
// alert("countSolutionBlanks: " + countSolutionBlanks);



document.getElementById("gameOver").innerHTML = "gameOver: " + gameOver;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;

//end of game over condition
}

// end of alphabet check
}
//END OF THE ENTRY EVENT
}

