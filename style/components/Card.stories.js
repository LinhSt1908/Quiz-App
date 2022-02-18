export default {
  title: 'Components/Card',
};

export const Default = () => /* html */ `
<article class="Card Card--error">
<h4 class="Card__title">QUIZ APP</h4>
</article>
<br />
    <div class="Box1">
      <div class="Card__question"><strong>Frage 1</strong></div>
      <p class="Card__content">
        Welches Land verzehrt jährlich pro Kopf am meisten Schokolade?
      </p>
      <div class="button"><button class="Card__answer">Antwort</button></div> 
      
    
    <div class="dropdown">
      <button onclick="myFunction()" class="btn">Antwort</button>
      <div id="myDropdown" class="dropdown-content">
      <a href="#Schweiz">Schweiz</a>
      </div>
    </div>


      <div class="Card__choice">
        <div class="boxSmall">#Süßigkeiten</div>
        <div class="boxSmall">#International</div>
        <div class="boxSmall">#Schokolade</div>
      </div>
    </div>


      <div class="Card__choice">
        <div class="boxSmall">#Süßigkeiten</div>
        <div class="boxSmall">#International</div>
        <div class="boxSmall">#Schokolade</div>
      </div>
    </div>


`;

export const Bookmarked = () => /* html */ `
  <article class="Card Card--error">
    <h4 class="Card__title">Quiz App</h4>
    <p class="Card__content">
      Lorem ipsum dolor  
    </p>
  </article>
`;

export const WithAnswer = () => /* html */ `
<div class="Box1">
<div class="Card__question"><strong>Frage 1</strong></div>
<p class="Card__content">
  Welches Land verzehrt jährlich pro Kopf am meisten Schokolade?
</p>
<div class="button"><button class="Card__answer">Antwort</button></div>
<div class="Card__choice">
  <div class="boxSmall">#Süßigkeiten</div>
  <div class="boxSmall">#International</div>
  <div class="boxSmall">#Schokolade</div>
</div>
</div>
`;

export const Footer = () => /* html */ `
    
  
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
