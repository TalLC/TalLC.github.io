import {html, css, LitElement} from '../lib/lit-element.js';
import ColumnSectionElement from './columnSection.js'

class TwoColumnsSectionElement extends ColumnSectionElement {

  constructor() {
    super();
  }
 
  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <div id="section" class="${this.getColorClass()} w3-container" style="padding-bottom: ${this.spacerBottom}px; padding-top: ${this.spacerTop}px;">
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
      <span class="${this.getCaretClass()}">
        <svg height="32" width="64">
          <polygon points="0,0 32,32 64,0" style="fill:var(--section-color-background${this.color === 'normal' ? '' : '-' + this.color});" />
        </svg> 
      </span>
    `;
  }
  
}

customElements.define("bb-two-columns-section", TwoColumnsSectionElement);
export default TwoColumnsSectionElement;
