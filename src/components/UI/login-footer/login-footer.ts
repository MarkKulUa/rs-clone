import Component from "../../../utils/component";
import { goToRegisterPopup } from "../../../utils/popup";
import "./login-footer.css";

class LoginFooter extends Component {
  registerLink: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["login-footer"], "");

    const memberSignupContainer = new Component(
      this.elem,
      "div",
      ["signup-container"],
      "Not a member yet?",
    );
    this.registerLink = new Component(
      memberSignupContainer.elem,
      "span",
      ["register-link"],
      "Register",
    );

    this.registerLink.elem.addEventListener("click", goToRegisterPopup);
  }

  /* goToRegisterPopup = () => {
    const loginPopup = <Element>document.querySelector(".login-popup");
    loginPopup.classList.remove("open");
    document.body.classList.remove("scroll-lock");
    const registerPopup = <Element>document.querySelector(".login-popup");
    registerPopup.classList.add("open");
    document.body.classList.add("scroll-lock");
  }; */
}

export default LoginFooter;
