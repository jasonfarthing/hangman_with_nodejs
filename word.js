//* **Word**: Used to create an object representing the current word the
//user is attempting to guess. This should contain word specific logic and data.
var wordToGuess = require('./randomword.js');

exports.yourWord = function(){
return wordToGuess.randomWord.words[Math.floor(Math.random()*wordToGuess.randomWord.words.length)];
}; 


