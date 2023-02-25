import Component from "../../utils/component";
import template from "./template";
import "./header.css";
import logoutAccount from "../../utils/logout";
// import { IState } from "../../types/types";

class Header extends Component {
  public navLinks;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["container", "header"]);
    this.appendHTML(template());

    this.navLinks = document.querySelectorAll(".nav-link");
    /* model.subscribe(() => {
      console.log("Hi!");
    }); */

    window.addEventListener("load", this.setActiveItem);
    window.addEventListener("click", this.setActiveLink);
    window.addEventListener("hashchange", this.setActiveItem);
  }

  private setActiveItem = () => {
    this.navLinks.forEach((item) => {
      item.classList.remove("active-color");
      if (item.getAttribute("href") === window.location.hash) {
        item.classList.add("active-color");
      }
    });
  };

  private setActiveLink = (e: MouseEvent) => {
    this.navLinks.forEach((item) => {
      item.classList.remove("active-color");
      if (item.getAttribute("href") === window.location.hash) {
        item.classList.add("active-color");
      }
    });
    logoutAccount(e);
  };
}

export default Header;
