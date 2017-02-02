//global variables
var solutionList = [
["red","A warm primary color"],
["blue","A cool primary color"],
["green","A verdant primary color"],
["yellow", "A chicken color"]
];
var solution;
var solutionHint;
var solutionInterface;
var solutionLetters;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins =0;
var losses=0;
var graphicArray;
var remainingGuesses;
var guessedLettersList;
var gameOver;

function gameSetup() {

	remainingGuesses = 10;
	guessedLettersList=[];
	gameOver=0;
	graphicArray=[];

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

 // hide when actually playing - debug only
 // document.getElementById("solutionArray").innerHTML = "Solution array: " + solutionLetters;

//build the interface element for the guessed letters
solutionInterface = [];
for (i = 0; i < solutionLetters.length; i++) {
	solutionInterface.push("_");
	graphicArray = graphicArray + "_";
}

document.getElementById("graphicArray").innerHTML = graphicArray;
document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;
document.getElementById("tally").innerHTML = "Wins: " + wins + " &nbsp Losses: " + losses;
document.getElementById("solutionInterface").innerHTML = "Solution Interface: " + solutionInterface;

}

gameSetup();


// THIS IS THE KEYBOARD ENTRY EVENT
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed
  var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();

// stops see keys if game over
if (gameOver === 1 ) {
	// document.getElementById("solutionHint").innerHTML = "Press 1 to play again.";
	gameSetup();

}
else	{


// validate key against alphabet (has to be a letter to pass)
var alphabetIndex = alphabet.includes(guessedLetter)
if (alphabetIndex == true) {
	// alert("alphabetIndex: " + alphabetIndex);


//decriment remaining guesses
remainingGuesses = remainingGuesses - 1;
document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;

// game over if guesses = 0
if (remainingGuesses == 0) {
	losses = losses + 1;
	gameOver = 1;
	document.getElementById("guessedLettersList").innerHTML = "Game Over - Loser!";
	document.getElementById("solutionHint").innerHTML = "Press any key to play again.";
	document.getElementById("tally").innerHTML = "Wins: " + wins + " &nbsp Losses: " + losses;
	document.getElementById("remainingGuesses").innerHTML = "";
	return
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

//have to reset graphic array here or it adds to itself strangely
graphicArray ="";
for (i = 0; i < solutionInterface.length ; i++) {
	graphicArray = graphicArray +  solutionInterface[i].toUpperCase(); ;
}


//checks if guessed letter is on the guessed list.
// if it isn't - it's added (pushed) on the the variable
var alreadyGuessed = guessedLettersList.includes (guessedLetter);
if (alreadyGuessed == true){
	return
}
else{
	guessedLettersList.push(guessedLetter);
}

// checks to see if any blanks in the solution interface - where the guesses go
// if no blanks, all letters are filled, thus a winner
var countSolutionBlanks = solutionInterface.includes ("_");
if (countSolutionBlanks == false) {
	document.getElementById("guessedLettersList").innerHTML = "Game Over - You win!";
	document.getElementById("solutionHint").innerHTML = "Press any key to play again.";
	document.getElementById("remainingGuesses").innerHTML = "";
	wins = wins + 1;
	gameOver = 1
}
// alert("countSolutionBlanks: " + countSolutionBlanks);

//end of game over condition
}

// end of alphabet check
}

document.getElementById("graphicArray").innerHTML = graphicArray;
document.getElementById("solutionInterface").innerHTML = "Solution Interface: " + solutionInterface;
// document.getElementById("gameOver").innerHTML = "gameOver: " + gameOver;
document.getElementById("tally").innerHTML = "Wins: " + wins + " &nbsp Losses: " + losses;
document.getElementById("guessedLettersList").innerHTML = "Guessed Letters: " + guessedLettersList;

//END OF THE ENTRY EVENT
}

