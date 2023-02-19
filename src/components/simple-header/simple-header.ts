import Component from "../../utils/component";
import template from "./template";
import "./simple-header.css";
import { openLoginPopup } from "../../utils/popup";
import Model from "../../model/model";

class SimpleHeader extends Component {
  public navLinks;

  constructor(parentNode: HTMLElement, model: Model) {
    super(parentNode, "div", ["container", "simple-header"]);
    this.appendHTML(template());

    this.navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("load", this.setActiveItem);
    window.addEventListener("click", this.setActiveLink);
    window.addEventListener("hashchange", this.setActiveItem);
  }

  private setActiveItem = () => {
    this.navLinks.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === window.location.hash) {
        item.classList.add("active");
      }
    });
  };

  private setActiveLink = (e: MouseEvent) => {
    this.navLinks.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === window.location.hash) {
        item.classList.add("active");
      }
    });
    openLoginPopup(e);
  };
}

export default SimpleHeader;
