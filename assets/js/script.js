// Getting information from the DOM

// For creating player choices
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');

// For creating computer choices
let sheldonRock = document.getElementById('sheldon-rock');
let sheldonPaper = document.getElementById('sheldon-rock');
let sheldonScissors = document.getElementById('sheldon-scissors');
let sheldonLizard = document.getElementById('sheldon-lizard');
let sheldonSpock = document.getElementById('sheldon-spock');

// For creating text areas, which are going to be filled depending on the game outcome
let choiceText = document.getElementById('choice-area');
let resultText = document.getElementById('result-area');

// For the score functions
let playerScore = document.getElementById('player-score');
let sheldonScore = document.getElementById('sheldon-score');

/**
 * Different choices and rules
 */

let choices = {
    rock: {name: 'Rock', defeats: ['scissors', 'lizard']},
    paper: {name: 'Paper', defeats: ['rock', 'spock']},
    scissors: {name: 'Scissors', defeats: ['paper', 'lizard']},
    lizard: {name: 'Lizard', defeats: ['paper', 'spock']},
    spock: {name: 'Spock', defeats: ['scissors, rock']},
};

let computerChoice = Math.random();
if (computerChoice < 0.2) {
    computerChoice = 'rock';
} else if (computerChoice <= 0.4) {
    computerChoice = 'paper';
} else if (computerChoice <= 0.6) {
    computerChoice = 'scissors';
} else if (computerChoice <= 0.8) {
    computerChoice = 'lizard';
} else {
    computerChoice = 'spock';
}


/**
 * Player select function
 */

function select(playerChoice) {
    checkResult (playerChoice);

    switch (playerChoice) {
        case 'rock':
            rock.classList.add('selected');
            break;
        case 'paper':
            paper.classList.add('selected');
            break;
        case 'scissors':
            scissors.classList.add('selected');
            break;
        case 'lizard':
            lizard.classList.add('selected');
            break;
        case 'spock':
            spock.classList.add('selected');
            break;
        default:
            break;
    }
}




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