import Component from "../../utils/component";
import PopupTitle from "../UI/popup-title/popup-title";
import RegisterForm from "../UI/register-form/register-form";
import SocialButtons from "../UI/social-buttons/social-buttons";
import SocialDivider from "../UI/social-divider/social-divider";
import "./register.css";

class Register extends Component {
  private registerContainer;

  private registerCloseContainer;

  private registerCloseX;

  public registerSocialButtons: SocialButtons;

  private registerSocialDivider: SocialDivider;

  private registerForm: RegisterForm;

  // loginFooter: LoginFooter;
  /* public confirmButton;
  public confirmMessage; */

  constructor(parentNode: HTMLElement, popupType: string) {
    super(parentNode, "div", ["register-popup"]);

    this.registerContainer = new Component(this.elem, "div", ["register-container"], "");
    this.registerCloseContainer = new Component(
      this.registerContainer.elem,
      "div",
      ["close-register"],
      "",
    );
    this.registerCloseX = new Component(this.registerCloseContainer.elem, "div", ["close-x"], "");
    const popupTitle = new PopupTitle(this.registerContainer.elem, "Sign in");
    this.registerSocialButtons = new SocialButtons(this.registerContainer.elem, `${popupType}`);
    this.registerSocialDivider = new SocialDivider(this.registerContainer.elem);
    this.registerForm = new RegisterForm(this.registerContainer.elem);
    // this.loginFooter = new LoginFooter(this.registerContainer.elem);

    /* this.confirmButton = new Component(this.elem, "button", ["confirm-button"], "CONFIRM");
    this.confirmMessage = new Component(this.elem, "div", ["confirm-message"], "");

    this.confirmButton.elem.onclick = () => this.onConfirmButtonClick(); */

    this.registerCloseX.elem.addEventListener("click", this.closeRegisterPopup);

    /* if (getStorageItem('buy') === 'true') {
      this.openPurchaseModalWindow();
      localStorage.setItem('buy', 'false');
    } */

    /* (<HTMLElement>this.cartSummaryButton?.elem).onclick = () => this.openPurchaseModalWindow();

    document.body.onclick = (e:MouseEvent) => this.closePurchaseModalWindow(e);

    this.cartProducts?.elem.addEventListener("click", (e:MouseEvent) => {
      const target = <HTMLElement>(e.target);
      if (target.classList.contains('product-image')) {
        goRouter(`#/product-details/${target.getAttribute("dataset")}`, productCart);
      }
    }); */
  }

  /* openPurchaseModalWindow = () => {
    this.cartPurchase.elem.classList.add("open");
    document.body.classList.add("scroll-lock");
  }; */

  closeRegisterPopup = () => {
    if (this.elem.classList.contains("open")) {
      this.elem.classList.remove("open");
      document.body.classList.remove("scroll-lock");
      console.log(this.elem);
    }
  };
}

export default Register;
