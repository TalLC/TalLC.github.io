import {html, css, LitElement} from '../lib/lit-element.js';

class ArticleElement extends LitElement {
  static styles = css`
    .title {
      font-family: var(--main-font-alternative);
      font-size: var(--main-font-alternative-size);
    }
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <link href="./assets/css/w3.css" rel="stylesheet">
      <div class="w3-container">
        <slot name="article-title" class="title"></slot>
        <slot name="article-body"></slot>
      </div>
    `;
  }
}

customElements.define("bb-article", ArticleElement);
export default ArticleElement;
