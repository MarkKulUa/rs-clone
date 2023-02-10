import Component from "../../utils/component";
import template from "./template";
import "./simple-header.css";

class SimpleHeader extends Component {
  public navLinks;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["container", "simple-header"]);
    this.appendHTML(template());

    this.navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("load", () => this.setActiveItem());
    window.addEventListener("click", () => this.setActiveItem());
    window.addEventListener("hashchange", () => this.setActiveItem());
  }

  private setActiveItem(): void {
    console.log(this.navLinks);
    this.navLinks.forEach((item) => {
      console.log(window.location.hash);
      item.classList.remove("active");
      if (item.getAttribute("href") === window.location.hash) {
        item.classList.add("active");
      }
      // return item;
    });
  }
}

export default SimpleHeader;
