const cardAnswer = document.querySelector('[data-js="final-answer"]');
const cardButton = document.querySelector('[data-js="answer-button"]');

cardButton.addEventListener('click', () => {
  cardAnswer.classList.toggle('visible');
});
