import Component from "../../../utils/component";
import "./social-divider.css";

class SocialDivider extends Component {
  private dividerLine;

  private dividerText;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["social-divider"]);

    this.dividerLine = new Component(this.elem, "div", ["divider-line"], "");
    this.dividerText = new Component(this.elem, "div", ["divider-text"], "or");
    this.dividerLine = new Component(this.elem, "div", ["divider-line"], "");
  }
}

export default SocialDivider;
