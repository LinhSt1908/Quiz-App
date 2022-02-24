const textAreaInput = document.querySelector('[data-js="input-form"]');
const textAreaCounter = document.querySelector('[data-js="input-counter"]');

textAreaInput.addEventListener('input', () => {
  if (textAreaInput.value.length < 100) {
    textAreaCounter.textContent = textAreaInput.value.length;
  } else {
    textAreaCounter.textContent = 'Your limit is reached';
  }
});