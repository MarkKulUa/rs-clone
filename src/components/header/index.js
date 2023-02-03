import template from "./template";
import "./style.css";

class Header {
  constructor(props) {
    this.props = props;
  }

  render() {
    const header = document.createElement("header");
    header.innerHTML = template(this.props.section);

    return header;
  }
}

export default Header;
