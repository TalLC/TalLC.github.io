import {html, css, LitElement} from '../lib/lit-element.js';
import ColumnSectionElement from './columnSection.js'

class SingleColumnSectionElement extends ColumnSectionElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <div id="section" class="${this.getColorClass()} w3-container" style="padding-bottom: ${this.spacerBottom}px; padding-top: ${this.spacerTop}px;">
        <slot name="section-block-title" class="section-title"></slot>
        <div class="w3-cell-row">
          <slot name="section-block-body"></slot>
          
          <div class="w3-container w3-cell w3-cell-middle w3-mobile centered">
            <slot name="section-block-img-1"></slot>
            <slot name="section-block-img-2"></slot>
            <slot name="section-block-img-3"></slot>
          </div>

          <div class="w3-container w3-cell w3-mobile">
            <slot name="section-block-text"></slot>
          </div>

        <!--
          <div class="w3-container w3-cell  w3-cell-middle w3-mobile">
            <slot name="section-block-img-2"></slot>
          </div>
        
          <div class="w3-container w3-cell  w3-cell-middle w3-mobile">
            <slot name="section-block-img-3"></slot>
          </div>
        -->
        
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

customElements.define("bb-single-column-section", SingleColumnSectionElement);
export default SingleColumnSectionElement;
