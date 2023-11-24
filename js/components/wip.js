import {html, css, LitElement} from '../lib/lit-element.js';

class WipElement extends LitElement {
  static styles = css`
    #modal {
      display: block;
    }
    .w3-modal-content {
      background-color: black;
    }
    .w3-container {
      text-align: center;
    }
  `;

  static properties = {};

  constructor() {
    super();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  close() {
    this.hidden = true;
  }

  getWipImage() {
    const i = this.getRandomInt(3) + 1;
    return `./assets/img/wip${i}.jpg`;
  }

  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <div id="modal" class="w3-modal" @click=${this.close}>
        <div class="w3-modal-content w3-animate-opacity w3-round-large">
          <img src="${this.getWipImage()}" class="w3-modal-content w3-round-large"/>
        </div>
      </div>
    `;
  }
}

customElements.define("bb-wip", WipElement);
export default WipElement;
