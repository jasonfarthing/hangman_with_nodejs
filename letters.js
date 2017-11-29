//* **Letter**: Used for each letter in the current word.
// Each letter object should either display an underlying character,
// or a blank placeholder (such as an underscore),
// depending on whether or not the user has guessed the letter.
// This should contain letter specific logic and data.



exports.placeholder = function placeholder(testWord) {
    
    var newWord = [];
    for (var i = 0; i < testWord.length; i++) {
        newWord.push("_ ");
    }
    return newWord.join("");
}