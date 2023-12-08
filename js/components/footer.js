import {html, css, LitElement} from '../lib/lit-element.js';

class FooterElement extends LitElement {
  static styles = css`
    footer {
      background-color: var(--section-color-background);
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2.5rem;
      text-align: center;
      padding: 5px;
    }
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <footer>CGI ©</footer>
    `;
  }
}

customElements.define("bb-footer", FooterElement);
export default FooterElement;
