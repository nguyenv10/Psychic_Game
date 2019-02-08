var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var wins = 0;
var losses = 0;
var guesses = 10;

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
    console.log(userGuess);
    guesses--;


    var computerGuess = options[Math.floor(Math.random()*options.length)]; 
    
    console.log(computerGuess);


    if ((userGuess==computerGuess)) {
        wins++;
    }
    
    else {
        losses++;
    }


    var html = "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>You have " + guesses + " guesses left.</p>";

    document.querySelector("#score").innerHTML = html;

    var letterGuesses = "<br><hr><h1>Your last guess was: " + userGuess + "</h1>";

    document.querySelector("#letterGuess").innerHTML = letterGuesses;
}