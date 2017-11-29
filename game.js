//main file

var inquirer = require('inquirer');
var word = require('./word.js');
var letter = require('./letters.js');

//need word and letter
console.log("***************************\n")
console.log('Guess the musical instrument...');
console.log('You have 10 trys...');
console.log('Here is your word...press a letter to guess.\n');



function startGame() {
    var currentWord = word.yourWord()
    var guessesLeft = 10;
    var wordToGuess = letter.placeholder(currentWord);
    console.log(wordToGuess);
}
startGame();








//You must keep track of the user's remaining guesses and prompt the user if
//they would like to end the game if none remain.