//main file

var inquirer = require('inquirer');
var word = require('./word.js');
var letter = require('./letters.js');

//need word and letter
console.log("\n");
console.log("***************************\n")
console.log('Guess the musical instrument...');
console.log('You have 10 guesses...');
// console.log('Here is your word...press a letter to guess.\n');



function startGame() {
    var currentWord = word.yourWord()
    var guessesLeft = 10;
    var wordToGuess = letter.placeholder(currentWord);
    console.log(" \n");
    console.log(wordToGuess);
    console.log(" \n");
}
startGame();


userGuess();



function userGuess() {
    var letterGuess = [];
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Ready to play?, pick a letter, any letter:',

       //TODO:
        
        //need array to store the users guess - letterGuess
        //need to parse wordToGuess into an array of letters
        //need function to compare wordToGuess array to the letterGuess array
        //if letterGuess matches a letter in wordToGuess, substitute that letter for the correspondeing blank space(s)
        //and the user will guess again. 
        //check to see if all letters are guessed and matched, if so, log "you guessed the word, good job!"
        //compare user guess with letters already guessed, if letter previously guessed, log "you already guessed that letter, try another"
        
        //else if letterGuess does NOT match letter in wordToGuess, the players guessesLeft goes down by one,
        //check to see if guessesLeft is > 0, if yes log "sorry, not correct, try again." user will guess another letter
        //if guessesLeft is == 0, and not all letters are guessed, then log "sorry, you did not guess the word...the word was + wordToGuess"
        //prompt "do you want to play again? Y/N"
        //if user input is Y, run startGame(), if NO then endGame.



        // below is some placeholder borrowed code, trying to sub in my vars/functions, etc, can't make sense of it.
        validate: function (wordToGuess) {
            var letters = new RegExp("^[a-zA-Z\s]{1,1}$");
            if (letter.placeholder(letterGuess)) {
                
                return true;
            } else {

                return false;
                console.log("You can only guess 1 letter at a time");

            }
        }
    }]).then(function (user) {
        console.log("============================================");
        var letter = user.letter;
        wordToGuess.checkLetter(letter);
        if (wordToGuess.isLetterValid) {
            console.log("You already guessed that letter, please try again.");
            userGuess();
        } else {
            if (wordToGuess.isComplete()) {
                console.log("You got it! Good job! - " + wordToGuess + " was the word.");
                playAgain();
            } else if (guessesLeft === 0) {
                console.log("That was your last guess! - The word was " + " ' " + wordToGuess + " ' ");
                playAgain();
            } else {
                console.log("You have " + guessesLeft + " guesses left!");
                console.log("...........................................");
                userGuess();
            }
        }
    });
}

// function playAgain(){
    
// }







//You must keep track of the user's remaining guesses and prompt the user if
//they would like to end the game if none remain.