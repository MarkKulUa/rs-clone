import Component from "../../utils/component";
import template from "./template";
import "./simple-header.css";
import { openLoginPopup } from "../../utils/popup";
import Model from "../../model/model";
import { setActiveLanguage, setActiveNavLink } from "../../utils/active-items";

class SimpleHeader extends Component {
  public navLinks;

  public langSpans;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["container", "simple-header"]);
    this.appendHTML(template());

    this.navLinks = document.querySelectorAll(".nav-link");
    this.langSpans = document.querySelectorAll(".lang-span");

    window.addEventListener("load", this.setActiveItem);
    window.addEventListener("click", this.setActiveLink);
    window.addEventListener("hashchange", this.setActiveItem);
  }

  private setActiveItem = () => {
    this.navLinks.forEach((item) => {
      item.classList.remove("active-color");
      if (item.getAttribute("href") === window.location.hash) {
        item.classList.add("active-color");
        Model.setState({
          navLink: item.getAttribute("href") ?? "",
        });
      }
    });
    /* const model = new Model();
    const state = model.getState();
    console.log(state.lang);
    this.langSpans.forEach((item) => {
      item.classList.remove("active");
      if (item.textContent === state.lang) {
        console.log(item.textContent);
        item.classList.add("active");
        console.log(item.classList);
      }
    }); */
  };

  private setActiveLink = (e: MouseEvent) => {
    /* this.navLinks.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === window.location.hash) {
        item.classList.add("active");
      }
    }); */
    setActiveNavLink(e);
    setActiveLanguage(e);
    openLoginPopup(e);
  };
}

export default SimpleHeader;
