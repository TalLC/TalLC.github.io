import {html, css, LitElement} from '../lib/lit-element.js';

class SingleColumnSectionElement extends LitElement {

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
  `;

  static properties = {
    color: {type: String},
    spacer: {type: Number}
  };

  constructor() {
    super();
  }
 
  getColorClass() {
    return `section-${this.color}`;
  }

  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <div id="section" class="${this.getColorClass()} w3-container" style="padding-bottom: ${this.spacer}px;">
        <slot name="section-block-title" class="section-title"></slot>
        <div class="w3-cell-row">
          <slot name="section-block-body"></slot>
          
          <div class="w3-container w3-cell w3-cell-middle w3-mobile centered">
            <slot name="section-block-img-1"></slot>
            <slot name="section-block-img-2"></slot>
            <slot name="section-block-img-3"></slot>
          </div>
<!--         
          <div class="w3-container w3-cell  w3-cell-middle w3-mobile">
            <slot name="section-block-img-2"></slot>
          </div>
        
          <div class="w3-container w3-cell  w3-cell-middle w3-mobile">
            <slot name="section-block-img-3"></slot>
          </div> -->
        
        </div>
      </div>
    `;
  }
  
}

customElements.define("bb-single-column-section", SingleColumnSectionElement);
export default SingleColumnSectionElement;
