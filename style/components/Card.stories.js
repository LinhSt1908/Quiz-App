import DefaultHtml from "./Card.default.html";

export default {
  title: "Components/Card",
};


export const Default= () => /* html */ `
  <article class="Card Card--error">
    <center><h4 class="Card__title">Quiz App</h4></center>
  </article>
  <div>
  <center><div class="Card__question">Frage 1</div></center>
  <p class="Card__content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
  <button>Antwort</button>
  <div>A</div> <div>B</div> <div>C</div>
  </div>
`;

export const Bookmarked= () => /* html */ `
  <article class="Card Card--error">
    <h4 class="Card__title">Quiz App</h4>
    <p class="Card__content">
      Lorem ipsum dolor  
    </p>
  </article>
`;

export const WithAnswer= () => /* html */ `
  <article class="Card Card--error">
    <h4 class="Card__title">Quiz App</h4>
    <p class="Card__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo
      eum 
    </p>
  </article>
`;