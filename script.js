'use strict';

// Set all variables  

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 6;
let check = document.querySelector('.check');
let highScore = 0;



// Game Logic

// Message Function

const displayMessage = function (message) {
    document.querySelector('.message').innerHTML = message;
}

// Check the number by adding Eventlistener To The Button

check.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('❌ No Number To Guess!')

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').innerHTML = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').innerHTML = highScore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {

            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').innerHTML = score;
        } else {

            displayMessage('💥 You lost the game!');
            document.querySelector('.score').innerHTML = 0;
        }
    }
})

// Reset The Game
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});