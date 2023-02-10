import Component from "../../utils/component";
import template from "./template";
import "./simple-header.css";

class SimpleHeader extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["container", "simple-header"]);
    this.appendHTML(template());
  }
}

export default SimpleHeader;
