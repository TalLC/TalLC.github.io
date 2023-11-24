import {html, css, LitElement} from '../lib/lit-element.js';

class HeaderElement extends LitElement {
  static styles = css`
      :host {
        background-color: var(--main-color-background);
        font-family: var(--main-font-alternative);
        font-size: var(--main-font-size-alternative);
      }
      .header {
        min-height: 64px;
        margin-top: 16px;
        margin-bottom: 16px;
      }
      img {
        max-width: 20vw;
      }
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <div class="header w3-container w3-black">
          <div class="w3-bar w3-cell-row">

            <div class="w3-cell w3-cell-middle w3-hide-medium w3-hide-small">
              <img src="./assets/img/logo-line.png" class="w3-bar-item" />
            </div>

            <div class="w3-cell w3-cell-middle">
              <a href="#" class="w3-bar-item w3-button w3-text-white w3-hover-text-white w3-hover-none w3-border-black w3-bottombar w3-hover-border-red">Accueil</a>  
              <a href="#" class="w3-bar-item w3-button w3-text-white w3-hover-text-white w3-hover-none w3-border-black w3-bottombar w3-hover-border-red">Projet</a>  
              <div class="w3-dropdown-hover">
                <a href="#" class="w3-button w3-text-white w3-black w3-hover-text-white w3-hover-none">Documentation</a>
                <div class="w3-dropdown-content w3-bar-block w3-card-4">
                  <a href="#" class="w3-bar-item w3-button w3-text-white w3-black w3-hover-text-white w3-hover-black w3-border-black w3-bottombar w3-hover-border-red">Documentations serveur</a>
                  <a href="#" class="w3-bar-item w3-button w3-text-white w3-black w3-hover-text-white w3-hover-black w3-border-black w3-bottombar w3-hover-border-red">Documentations client</a>
                </div>
              </div>
              <a href="#" class="w3-bar-item w3-button w3-text-white w3-hover-text-white w3-hover-none w3-border-black w3-bottombar w3-hover-border-red">Téléchargements</a>  
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("bb-header", HeaderElement);
export default HeaderElement;
