import Component from "../../utils/component";
import LoginFooter from "../UI/login-footer/login-footer";
import LoginForm from "../UI/login-form/login-form";
import PopupTitle from "../UI/popup-title/popup-title";
import SocialButtons from "../UI/social-buttons/social-buttons";
import SocialDivider from "../UI/social-divider/social-divider";
import "./login.css";

class Login extends Component {
  private loginContainer;

  private loginCloseContainer;

  private loginCloseX;

  public socialButtons: SocialButtons;

  private socialDivider: SocialDivider;

  private loginForm: LoginForm;

  loginFooter: LoginFooter;
  /* public confirmButton;
  public confirmMessage; */

  constructor(parentNode: HTMLElement, popupType: string) {
    super(parentNode, "div", ["login-popup"]);

    this.loginContainer = new Component(this.elem, "div", ["login-container"], "");
    this.loginCloseContainer = new Component(
      this.loginContainer.elem,
      "div",
      ["close-container"],
      "",
    );
    this.loginCloseX = new Component(this.loginCloseContainer.elem, "div", ["close-x"], "");
    const popupTitle = new PopupTitle(this.loginContainer.elem, "Log in");
    this.socialButtons = new SocialButtons(this.loginContainer.elem, `${popupType}`);
    this.socialDivider = new SocialDivider(this.loginContainer.elem);
    this.loginForm = new LoginForm(this.loginContainer.elem);
    this.loginFooter = new LoginFooter(this.loginContainer.elem);

    /* this.confirmButton = new Component(this.elem, "button", ["confirm-button"], "CONFIRM");
    this.confirmMessage = new Component(this.elem, "div", ["confirm-message"], "");

    this.confirmButton.elem.onclick = () => this.onConfirmButtonClick(); */

    this.loginCloseX.elem.addEventListener("click", this.closeLoginPopup);

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

  closeLoginPopup = () => {
    if (this.elem.classList.contains("open")) {
      this.elem.classList.remove("open");
      document.body.classList.remove("scroll-lock");
      console.log(this.elem);
    }
  };
}

export default Login;
