'use strict';
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 19;
let heighScore = 0;
function displayMassage(msg) {
  return (document.querySelector('.message').textContent = msg);
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMassage('⚠️ not a number');
  } else if (guess === randomNumber) {
    document.querySelector('.score').textContent = score;
    if (score < 0) {
      document.querySelector('.score').textContent = '0';
    } else {
      score--;
    }
    displayMassage('🎉 Correct Number !');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > heighScore) {
      heighScore = score + 1;
      document.querySelector('.highscore').textContent = heighScore;
    }
  } else if (guess !== randomNumber) {
    if (score >= 1) {
      displayMassage(guess > randomNumber ? '⬆️ Too high' : '⬇️ Too low');
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      document.querySelector('.score').textContent = '0';
      displayMassage('❌ You lost the game');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  displayMassage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 19;
});
