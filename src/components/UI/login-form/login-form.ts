import { Methods } from "../../../types/types";
import Component from "../../../utils/component";
import InputComponent from "../../../utils/input-component";
import "./login-form.css";

class LoginForm extends Component {
  eMailInput: InputComponent;

  passwordInput: InputComponent;

  loginButton: Component;

  message: Component;

  showPassword: Component;

  forgotPasswordLink: Component;

  formErrorMessage: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "form", ["login-form"], "");

    this.elem.setAttribute("method", Methods.POST);
    const eMailContainer = new Component(this.elem, "div", ["form-item", "item"]);
    // new Component(eMailContainer.elem, "label", ["item-label"], "");
    this.eMailInput = new InputComponent(
      eMailContainer.elem,
      "email",
      ["email-input"],
      "Email address",
    );
    this.eMailInput.elem.setAttribute("required", "");

    const passwordContainer = new Component(this.elem, "div", ["form-item", "item"]);
    this.passwordInput = new InputComponent(
      passwordContainer.elem,
      "password",
      ["item-input"],
      "Password",
    );
    this.passwordInput.elem.setAttribute("required", "");

    const showPasswordContainer = new Component(this.elem, "div", ["form-item", "item"]);
    this.showPassword = new Component(showPasswordContainer.elem, "div", ["item-checkbox"], "");
    const showPasswordLable = new Component(
      showPasswordContainer.elem,
      "label",
      ["item-label"],
      "show password",
    );
    this.showPassword.elem.addEventListener("click", () => this.toggleShow());

    const messageContainer = new Component(this.elem, "div", ["form-item", "item"], "");
    this.message = new Component(messageContainer.elem, "div", ["item-message"], "");

    this.loginButton = new Component(this.elem, "button", ["btn", "login-button"], "Log in");
    const forgotPasswordContainer = new Component(this.elem, "div", ["forgot-container"], "");
    this.forgotPasswordLink = new Component(
      forgotPasswordContainer.elem,
      "a",
      ["forgot-link"],
      "Forgot your password?",
    );
    this.forgotPasswordLink.elem.setAttribute("href", "#");
    this.formErrorMessage = new Component(this.elem, "div", ["form-message"], "");
  }

  toggleShow() {
    this.showPassword.elem.classList.toggle("item-checkbox__active");
    if (this.showPassword.elem.classList.contains("item-checkbox__active")) {
      this.passwordInput.elem.setAttribute("type", "text");
    } else {
      this.passwordInput.elem.setAttribute("type", "password");
    }
  }
}

export default LoginForm;
