class MyHeader extends HTMLElement {
  ConnectedCallback() {
    this.innerHTML='
    <header>
    <a href="index.html">
    <img src="#"></a>
    <nav>
    <ul>
    <li><a href="index.html"></li>
    <li><a href="index.html"></li>
    <li><a href="index.html"></li>
    <li><a href="index.html"></li>
    </ul>
    </nav>
    </header>
    '
  }
}
customElements.define(my-header, MyHeader)

class MyFooter extends HTMLElement {
  ConnectedCallback() {
    this.innerHTML='
    <footer>
    © 2021 Tucker Watson
    </footer>
    '
  }
}
customElements.define(my-footer, MyFooter)
