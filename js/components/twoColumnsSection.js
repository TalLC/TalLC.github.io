import {html, css, LitElement} from '../lib/lit-element.js';

class TwoColumnsSectionElement extends LitElement {

  static styles = css`
    #section {
      padding-left: 15vw;
      padding-right: 15vw;
      padding-top: 32px;
      padding-bottom: 0px;
    }

    .section-title {
      font-family: var(--main-font-alternative);
      font-size: var(--main-font-alternative-size);
    }

    .section-normal {
      background-color: var(--section-color-background);
      color: var(--section-color-text);
    }
    .section-alternative-1 {
      background-color: var(--section-color-background-alternative-1);
      color: var(--section-color-text-alternative-1);
    }
    .section-alternative-2 {
      background-color: var(--section-color-background-alternative-2);
      color: var(--section-color-text-alternative-2);
    }

    .centered {
      text-align: center;
    }
    .spacer {
      margin-bottom: 32px;
    }
  `;

  static properties = {
    color: {type: String},
    spacer: {type: Boolean}
  };

  constructor() {
    super();
  }
 
  getColorClass() {
    return `section-${this.color}`;
  }

  getSpacerClass() {
    return this.spacer ? "spacer" : "";
  }

  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <div id="section" class="${this.getColorClass()} ${this.getSpacerClass()} w3-container">
        <div class="w3-cell-row">
          <div class="w3-half w3-mobile">
            <slot name="section-block-left"></slot>
          </div>
          <!-- Utilisé pour centrer les images dans leur colonne -->
          <div class="w3-half w3-mobile centered">
            <slot name="section-block-left-center"></slot>
          </div>

          <div class="w3-half w3-mobile">
            <slot name="section-block-right"></slot>
          </div>
          <!-- Utilisé pour centrer les images dans leur colonne -->
          <div class="w3-half w3-mobile centered">
            <slot name="section-block-right-center"></slot>
          </div>
        </div>
      </div>
    `;
  }
  
}

customElements.define("bb-two-columns-section", TwoColumnsSectionElement);
export default TwoColumnsSectionElement;
