import {html, css, LitElement} from '../lib/lit-element.js';

class ButtonElement extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
    }

    .button-size {
      width: 120px;
      margin: 5px;
    }
  `;

  static properties = {
    href: {type: String},
    disabled: {type: Boolean}
  };

  constructor() {
    super();
  }

  getColorClass() {
    return this.disabled ? "w3-gray w3-disabled" : "w3-red";
  }

  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <a class="w3-button w3-round-large ${this.getColorClass()} button-size" href="${this.href}">${this.textContent}</a>
    `;
  }
}

customElements.define("bb-button", ButtonElement);
export default ButtonElement;
