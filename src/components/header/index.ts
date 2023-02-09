import Component from "../../utils/component";
import template from "./template";
import "./style.css";
// import { IState } from "../../types/types";

/* class Header {
  protected props: IState;

  constructor(props: IState) {
    this.props = props;
  }

  render() {
    const header = document.createElement("header");
    header.classList.add("header");
    // header.classList.add("simple_header");
    header.innerHTML = template(this.props.section);

    return header;
  }
} */

class Header extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, "header", ["header"]);
    this.appendHTML(template());
  }

  /* render() {
    this.elem.innerHTML = template();

    return this.elem;
  } */
}

export default Header;
