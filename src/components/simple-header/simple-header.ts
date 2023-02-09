import Component from "../../utils/component";
import template from "./template";
import "./simple-header.css";

class SimpleHeader extends Component {
  private navItems: Component[] = [];

  private toAboutLink: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["container", "simple-header"]);
    this.appendHTML(template());

    this.toAboutLink = new Component(this.elem, "a", ["nav-item"], "about");
    console.log(this.toAboutLink);
  }
}

export default SimpleHeader;
