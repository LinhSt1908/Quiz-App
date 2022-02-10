import DefaultHtml from "./Card.default.html";

export default {
  title: "Components/Card",
};


export const Default= () => /* html */ `
  <article class="Card Card--error">
    <h4 class="Card__title">Quiz App</h4>
  </article>
  <div class="Box1">
  <div class="Card__question"><strong>Frage 1</strong></div>
  <p class="Card__content">Welches Land verzehrt am meisten Schokolade?</p>
  <button class="Card__answer">Antwort</button>
  <div class="Card__choice">
  <div class="boxSmall">Südafrika</div> <div class="boxSmall">Deutschland</div> <div class="boxSmall">Schweiz</div> <div class="boxSmall">USA</div>
  </div>
  </div>

  <div class="Box1">
  <div class="Card__question"><strong>Frage 2</strong></div>
  <p class="Card__content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
  <button class="Card__answer">Antwort</button>
  <div class="Card__choice">
  <div class="boxSmall">A</div> <div class="boxSmall">B</div> <div class="boxSmall">C</div> <div class="boxSmall">D</div>
  </div>
  </div>

  <div class="Box1">
  <div class="Card__question"><strong>Frage 3</strong></div>
  <p class="Card__content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
  <button class="Card__answer">Antwort</button>
  <div class="Card__choice">
  <div class="boxSmall">A</div> <div class="boxSmall">B</div> <div class="boxSmall">C</div> <div class="boxSmall">D</div>
  </div>
  </div>

  <div class="Box1">
  <div class="Card__question"><strong>Frage 4</strong></div>
  <p class="Card__content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
  <button class="Card__answer">Antwort</button>
  <div class="Card__choice">
  <div class="boxSmall">A</div> <div class="boxSmall">B</div> <div class="boxSmall">C</div> <div class="boxSmall">D</div>
  </div>
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

export const Footer= () => /* html */ `
      <footer>
      <div class="Footer">
      <div class="Home">🏠</div>
      <div class="bookmark">🔖</div>
      <div class="Creative">📝</div>
      <div class="Profile">👤</div>
        
      </div>
    </footer>
  
`;