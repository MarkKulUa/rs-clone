import template from "./template";
import "./style.css";
import { IState } from "../../types/types";

class Header {
  protected props: IState;

  constructor(props: IState) {
    this.props = props;
  }

  render() {
    const header = document.createElement("header");
    header.classList.add("header");
    // header.classList.add("simple_header");
    header.innerHTML = template();

    const burger = header.querySelector(".burger") as HTMLElement;
    const nav = header.querySelector(".nav-list") as HTMLElement;
    const overlay = header.querySelector(".overlay") as HTMLElement;

    burger.addEventListener("click", () => {
      nav.classList.toggle("show");
      burger.classList.toggle("open");
      overlay.classList.toggle("overlay-active");
    });

    overlay.addEventListener("click", () => {
      nav.classList.remove("show");
      burger.classList.remove("open");
      nav.classList.add("hide");
      overlay.classList.remove("overlay-active");
    });

    return header;
  }
}

export default Header;
