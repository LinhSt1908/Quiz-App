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
    
  
    <nav class="Footer">
      <ul>
        <li>
        <a href="./index.html">
            <img src="https://img.icons8.com/ios/50/000000/home--v1.png" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
        <a href="./Bookmark.html">
            <img
              src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-bookmark-documents-icongeek26-outline-icongeek26.png"
            />
          </a>
        </li>
      </ul>
      <ul>
        <li>
        <a href="./create.html">
            <img
              src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-marker-education-prettycons-lineal-prettycons-1.png"
            />
          </a>
        </li>
      </ul>
      <ul>
        <li>
        <a href="./profile.html">
            <img
              src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/000000/external-profile-social-media-sbts2018-mixed-sbts2018-1.png"
            />
          </a>
        </li>
      </ul>
    </nav>



       
`;