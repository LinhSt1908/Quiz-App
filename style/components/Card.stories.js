import DefaultHtml from "./Card.default.html";

export default {
  title: "Components/Card",
};


export const Default= () => /* html */ `
<article class="Card Card--error">
<h4 class="Card__title">QUIZ APP</h4>
</article>
<br />
<div class="Box1">
<div class="icon"><img src="https://www.svgrepo.com/show/135886/bookmark.svg" alt="bookmark"/></div>
  <div class="Card__question"><strong>Frage 1</strong></div>
  <p class="Card__content">
    Welches Land verzehrt jährlich am meisten Schokolade?
  </p>
  <div class="button"><button class="Card__answer">Antwort</button></div>
  <div class="Card__choice">
    <div class="boxSmall">Südafrika</div>
    <div class="boxSmall">Deutschland</div>
    <div class="boxSmall">Schweiz</div>
    <div class="boxSmall">USA</div>
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