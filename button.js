const cardButton = document.querySelector('[data-js="answer-button"]');
const cardAnswer = document.querySelector('[data-js="final-answer"]');

cardButton.addEventListener('click', () => {
  cardAnswer.classList.toggle('visible');
});
