import {html, css, LitElement} from '../lib/lit-element.js';

class ColumnSectionElement extends LitElement {

  static styles = css`
    #section {
      padding-left: 15vw;
      padding-right: 15vw;
      padding-top: 0;
      padding-bottom: 0;
      text-align: justify;
    }

    .caret-right {
      position: absolute;
      right: var(--section-caret-margin);
      z-index: 1;
    }

    .caret-left {
      position: absolute;
      left: var(--section-caret-margin);
      z-index: 1;
    }

    .caret-none {
      display: none;
      z-index: 1;
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
    spacerTop: {type: Number},
    spacerBottom: {type: Number},
    caret: {type: String}
  };

  static authorizedCaretValues = ['left', 'right'];

  constructor() {
    super();
  }
 
  getColorClass() {
    return `section-${this.color}`;
  }

  getCaretClass() {
    return `caret-${ColumnSectionElement.authorizedCaretValues.includes(this.caret) ? this.caret : 'none'}`;
  }

  render() {
    return html``;
  }
  
}
export default ColumnSectionElement;
