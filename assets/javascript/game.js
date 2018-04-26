var wins = 0;
var losses = 0;
var guessesSoFar = [""];
var guessesLeft = 9;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {
    
    var playerGuess = event.key;
    var far = document.getElementById("soFar");
    var boardWins = document.getElementById("wins");
    var boardLosses = document.getElementById("losses");
    var left = document.getElementById("guessesLeft");
    
    guessesSoFar.push(playerGuess);
    far.textContent += event.key;

    if (playerGuess == computerGuess && guessesLeft > 0) {
        wins++;
        boardWins.textContent = wins;
        alert("You guessed correct!");
        guessesLeft = 9;
        guessesSoFar = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
    } else if (playerGuess !== computerGuess) {
        guessesLeft--;
        left.textContent = guessesLeft;
        if(guessesLeft < 1) {
            alert("YOU LOSE");
            guessesLeft = 9;
            losses = losses + 1;
            // guessesSoFar = [""];
        }
    }

}