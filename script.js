
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

const textAreaInput = document.querySelector('[data-js="input-form"]');
const textAreaCounter = document.querySelector('[data-js="input-counter"]');

textAreaInput.addEventListener("input", () => {

if (textAreaInput.value.length < 100) {
  textAreaCounter.textContent = textAreaInput.value.length;
}
else {textAreaCounter.textContent = "Your limit is reached";
}
})

