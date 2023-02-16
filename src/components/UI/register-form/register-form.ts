import { MAIL_REGEXP, Methods, PASSWORD_REGEXP } from "../../../types/types";
import Component from "../../../utils/component";
import InputComponent from "../../../utils/input-component";
import GenderForm from "../radio-forms/gender-form";
import "./register-form.css";

class RegisterForm extends Component {
  genderForm: Component;

  registerFirstName: InputComponent;

  registerLastName: InputComponent;

  registerBirthYear: InputComponent;

  registerEMailInput: InputComponent;

  registerPasswordInput: InputComponent;

  registerFatherFirstName: InputComponent;

  registerFatherLastName: InputComponent;

  registerMotherFirstName: InputComponent;

  registerMotherLastName: InputComponent;

  registerButton: Component;

  registerMessage: Component;

  // showPassword: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "form", ["register-form"], "");
    this.elem.setAttribute("method", Methods.POST);

    const registerTitle = new Component(this.elem, "div", ["register-title"], "Sign up with Email");
    this.genderForm = new GenderForm(this.elem);
    const registerUserNameContainer = new Component(this.elem, "div", ["person-container"], "");
    this.registerFirstName = new InputComponent(
      registerUserNameContainer.elem,
      "text",
      ["register-name"],
      "First name",
    );
    this.registerFirstName.elem.setAttribute("required", "");
    this.registerLastName = new InputComponent(
      registerUserNameContainer.elem,
      "text",
      ["register-name"],
      "Last name",
    );
    this.registerLastName.elem.setAttribute("required", "");
    this.registerBirthYear = new InputComponent(
      this.elem,
      "number",
      ["birth-year"],
      "Year of birth",
    );
    this.registerBirthYear.elem.setAttribute("required", "");
    this.registerBirthYear.elem.setAttribute("value", "1970");
    this.registerBirthYear.elem.setAttribute("min", "1900");
    this.registerBirthYear.elem.setAttribute("max", "2023");

    const eMailContainer = new Component(this.elem, "div", ["form-item", "item"]);
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
      ["password-input"],
      "Password",
    );

    this.registerPasswordInput.elem.setAttribute("minlength", "6");
    this.registerPasswordInput.elem.setAttribute("required", "");

    const registerFatherContainer = new Component(this.elem, "div", ["parents-container"], "");
    const registerFatherTitle = new Component(
      registerFatherContainer.elem,
      "h5",
      ["parent-title"],
      "My father",
    );
    const registerFatherNameContainer = new Component(
      registerFatherContainer.elem,
      "div",
      ["person-container"],
      "",
    );
    this.registerFatherFirstName = new InputComponent(
      registerFatherNameContainer.elem,
      "text",
      ["register-name"],
      "First name",
    );
    this.registerFatherLastName = new InputComponent(
      registerFatherNameContainer.elem,
      "text",
      ["register-name"],
      "Last name",
    );

    const registerMotherContainer = new Component(this.elem, "div", ["parents-container"], "");
    const registerMotherTitle = new Component(
      registerMotherContainer.elem,
      "h5",
      ["parent-title"],
      "My mother",
    );
    const registerMotherNameContainer = new Component(
      registerMotherContainer.elem,
      "div",
      ["person-container"],
      "",
    );
    this.registerMotherFirstName = new InputComponent(
      registerMotherNameContainer.elem,
      "text",
      ["register-name"],
      "First name",
    );
    this.registerMotherLastName = new InputComponent(
      registerMotherNameContainer.elem,
      "text",
      ["register-name"],
      "Maiden name",
    );

    /* const showPasswordContainer = new Component(this.elem, "div", ["item-checkbox"]);
    this.showPassword = new Component(showPasswordContainer.elem, "div", ["item-checkbox"], "");
    const showPasswordLable = new Component(
      showPasswordContainer.elem,
      "label",
      ["item-label"],
      "show password",
    );
    this.showPassword.elem.addEventListener("click", () => this.togglePassShow()); */

    const messageContainer = new Component(this.elem, "div", ["form-item", "item"], "");
    this.registerMessage = new Component(messageContainer.elem, "div", ["register-message"], "");

    this.registerButton = new Component(this.elem, "button", ["btn", "register-button"], "Sign up");

    this.registerButton.elem.addEventListener("click", () => this.validateData());
  }

  private validateData() {
    const isEmail = MAIL_REGEXP.test(this.registerEMailInput.elem.value)
      && this.registerEMailInput.elem.value.trim() !== "";
    const isPasssword = PASSWORD_REGEXP.test(this.registerPasswordInput.elem.value)
      && this.registerPasswordInput.elem.value.trim() !== "";
    if (isEmail && isPasssword) {
      this.registerMessage.elem.textContent = "";
    } else {
      this.registerMessage.elem.textContent = "Incorrect input data ";
    }
  }

  /* togglePassShow() {
    this.showPassword.elem.classList.toggle("checkbox-active");
    if (this.showPassword.elem.classList.contains("checkbox-active")) {
      this.registerPasswordInput.elem.setAttribute("type", "text");
    } else {
      this.registerPasswordInput.elem.setAttribute("type", "password");
    }
  } */
}

export default RegisterForm;
