import { loginUser } from "../../../api/api";
import Model from "../../../model/model";
import {
  ILoginUser,
  ILoginData,
  MAIL_REGEXP,
  Methods,
  PASSWORD_REGEXP,
  SERVER_URL,
  StatusCodes,
} from "../../../types/types";
import Component from "../../../utils/component";
import InputComponent from "../../../utils/input-component";
import { closeLoginPopup } from "../../../utils/popup";
import "./login-form.css";

class LoginForm extends Component {
  eMailInput: InputComponent;

  passwordInput: InputComponent;

  loginButton: Component;

  loginMessage: Component;

  showPassword: Component;

  forgotPasswordLink: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "form", ["login-form"], "");

    const eMailContainer = new Component(this.elem, "div", ["form-item", "item"]);
    this.eMailInput = new InputComponent(
      eMailContainer.elem,
      "email",
      ["item-input"],
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

    const showPasswordContainer = new Component(this.elem, "div", [
      "form-item",
      "password-checkbox",
    ]);
    this.showPassword = new Component(showPasswordContainer.elem, "div", ["item-checkbox"], "");
    const showPasswordLable = new Component(
      showPasswordContainer.elem,
      "label",
      ["item-label"],
      "show password",
    );
    this.showPassword.elem.addEventListener("click", () => this.togglePassShow());

    const messageContainer = new Component(this.elem, "div", ["form-item", "item"], "");
    this.loginMessage = new Component(messageContainer.elem, "div", ["login-message"], "");

    this.loginButton = new Component(this.elem, "button", ["btn", "login-button"], "Log in");
    this.loginButton.elem.setAttribute("type", "submit");
    const forgotPasswordContainer = new Component(this.elem, "div", ["forgot-container"], "");
    this.forgotPasswordLink = new Component(
      forgotPasswordContainer.elem,
      "a",
      ["forgot-link"],
      "Forgot your password?",
    );
    this.forgotPasswordLink.elem.setAttribute("href", "#");

    this.elem.addEventListener("submit", (e) => this.validateLoginData(e));
  }

  private async loginUser(user: ILoginUser): Promise<Response> {
    const res = await loginUser(user);
    if (res.status !== StatusCodes.Ok) {
      const data = await res.json();
      this.loginMessage.elem.textContent = data.message || "";
    }
    return res;
  }

  private async validateLoginData(e: SubmitEvent) {
    e.preventDefault();
    const isEmail = MAIL_REGEXP.test(this.eMailInput.elem.value) && this.eMailInput.elem.value.trim() !== "";
    const isPasssword = PASSWORD_REGEXP.test(this.passwordInput.elem.value)
      && this.passwordInput.elem.value.trim() !== "";
    if (isEmail && isPasssword) {
      this.loginMessage.elem.textContent = "";
      const email = <string> this.eMailInput.elem.value;
      const password = <string> this.passwordInput.elem.value;
      const user: ILoginUser = { email, password };
      const res = await this.loginUser(user);
      if (res.status === StatusCodes.Ok) {
        const data = await res.json();
        this.loginMessage.elem.textContent = data.message || "";
        Model.setState({
          userId: <string>data.userId,
          userName: <string>data.fullName,
          token: <string>data.token,
          rToken: <string>data.rToken,
        });
        console.log(JSON.stringify(Model.getState()));
        closeLoginPopup();
        window.location.href = "http://localhost:3001/#/site";
      }
    } else {
      this.loginMessage.elem.textContent = "Incorrect login data!";
    }
  }

  togglePassShow() {
    this.showPassword.elem.classList.toggle("checkbox-active");
    if (this.showPassword.elem.classList.contains("checkbox-active")) {
      this.passwordInput.elem.setAttribute("type", "text");
    } else {
      this.passwordInput.elem.setAttribute("type", "password");
    }
  }
}

export default LoginForm;
