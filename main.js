class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav>
        <a href="index.html">Home</a>
        <a href="snacks.html">Snacks</a>
        <a href="meals.html">Meals</a>
        <a href="desserts.html">Desserts</a>
        <a href="contact.html">Contact Us</a>
      </nav>
    `;
  }
}

customElements.define('my-header', Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <p>©2021 Tucker's Recipe Guide</p>
    </footer>
    `;
  }
}

customElements.define('my-footer', Footer);
