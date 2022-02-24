const dropdown = document.querySelectorAll('[data-js="answer"]');

dropdown.forEach(x => {
  const finalAnswer = x.querySelector('[data-js="final-answer"]');
  const answerButton = x.querySelector('[data-js="answer-button"]');

  answerButton.addEventListener('click', () => {
    finalAnswer.classList.toggle('visible');
  });
});
