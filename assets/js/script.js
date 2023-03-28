/**
 * This game is influenced by YvonneDev
 * https://diyifang.medium.com/spock-rock-game-with-javascript-f3cbe9ea61a4.
 * I really liked the idea of having a more interactive game against
 * the computer and at the same time keeping the code short and tidy,
 * which I think she has achieved in her code.
 */

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
 * Different choices and rules.
 * I found help on https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript
 * in order to reduce repition.
 */

let choices = {
    rock: {name: 'Rock', defeats: ['scissors', 'lizard']},
    paper: {name: 'Paper', defeats: ['rock', 'spock']},
    scissors: {name: 'Scissors', defeats: ['paper', 'lizard']},
    lizard: {name: 'Lizard', defeats: ['paper', 'spock']},
    spock: {name: 'Spock', defeats: ['scissors, rock']}
};

// Function for random computer choice
let sheldonChoice = '';
function sheldonRandomChoice() {
    let sheldonChoiceNumber = Math.random();
  if (sheldonChoiceNumber < 0.2) {
    sheldonChoice = 'rock';
  } else if (sheldonChoiceNumber <= 0.4) {
    sheldonChoice = 'paper';
  } else if (sheldonChoiceNumber <= 0.6) {
    sheldonChoice = 'scissors';
  } else if (sheldonChoiceNumber <= 0.8) {
    sheldonChoice = 'lizard';
  } else {
    sheldonChoice = 'spock';
  }
}

// Function for displaying computer choice
function displaySheldonChoice() {
    switch (sheldonChoice) {
        case 'rock':
            sheldonRock.classList.add('selected-sheldon');
            choiceText.innerText = 'Sheldon chose Rock';
            break;
        case 'paper':
            sheldonRock.classList.add('selected-sheldon');
            choiceText.innerText = 'Sheldon chose Paper';
            break;
        case 'Scissors':
            sheldonRock.classList.add('selected-sheldon');
            choiceText.innerText = 'Sheldon chose Scissors';
            break;
        case 'lizard':
            sheldonRock.classList.add('selected-sheldon');
            choiceText.innerText = 'Sheldon chose Lizard';
            break;
        case 'spock':
            sheldonRock.classList.add('selected-sheldon');
            choiceText.innerText = 'Sheldon chose Spock';
            break;
        default:
            break;    
    }
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