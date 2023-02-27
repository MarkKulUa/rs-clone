import Component from "../../../utils/component";
import "./social-buttons.css";

class SocialButtons extends Component {
  public withFacebookButton;

  public withGoogleButton;

  constructor(parentNode: HTMLElement, popupType: string) {
    super(parentNode, "div", ["social-buttons"]);

    this.withFacebookButton = new Component(
      this.elem,
      "button",
      ["social-button", "facebook-button"],
      `${popupType} with Facebook`,
    );
    this.withGoogleButton = new Component(
      this.elem,
      "button",
      ["social-button", "google-button"],
      `${popupType} with Google`,
    );
  }
}

export default SocialButtons;
