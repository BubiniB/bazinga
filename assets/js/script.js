// Getting information from the DOM

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');

let playerScore = document.getElementById('player-score');
let sheldonScore = document.getElementById('sheldon-score');



/**
 * Function to increment player score
 */
function incrementPlayerScore() {
    let currentScore = parseInt(playerScore.innerText);
    playerScore.innerText = ++currentScore;
}

/**
 * Function to increment computer's score
 */
function incrementSheldonScore() {
    let currentScore = parseInt(sheldonScore.innerText);
    sheldonScore.innerText = ++currentScore;
}