import Component from "../../../utils/component";
import InputComponent from "../../../utils/input-component";

class RegisterForm extends Component {
  registerEMailInput: InputComponent;

  registerPasswordInput: InputComponent;

  registerButton: Component;

  registerMessage: Component;

  showPassword: Component;

  // forgotPasswordLink: Component;

  formErrorMessage: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "form", ["login-form"], "");

    // this.elem.setAttribute("method", Methods.POST);
    const eMailContainer = new Component(this.elem, "div", ["form-item", "item"]);
    // new Component(eMailContainer.elem, "label", ["item-label"], "");
    this.registerEMailInput = new InputComponent(
      eMailContainer.elem,
      "email",
      ["email-input"],
      "Email address",
    );
    this.registerEMailInput.elem.setAttribute("required", "");

    const passwordContainer = new Component(this.elem, "div", ["form-item", "item"]);
    this.registerPasswordInput = new InputComponent(
      passwordContainer.elem,
      "password",
      ["item-input"],
      "Password",
    );
    this.registerPasswordInput.elem.setAttribute("required", "");

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
    this.registerMessage = new Component(messageContainer.elem, "div", ["item-message"], "");

    this.registerButton = new Component(this.elem, "button", ["btn", "login-button"], "Sign in");
    /* const forgotPasswordContainer = new Component(this.elem, "div", ["forgot-container"], "");
    this.forgotPasswordLink = new Component(
      forgotPasswordContainer.elem,
      "a",
      ["forgot-link"],
      "Forgot your password?",
    );
    this.forgotPasswordLink.elem.setAttribute("href", "#"); */
    this.formErrorMessage = new Component(this.elem, "div", ["form-message"], "");
  }

  toggleShow() {
    this.showPassword.elem.classList.toggle("item-checkbox__active");
    if (this.showPassword.elem.classList.contains("item-checkbox__active")) {
      this.registerPasswordInput.elem.setAttribute("type", "text");
    } else {
      this.registerPasswordInput.elem.setAttribute("type", "password");
    }
  }
}

export default RegisterForm;
