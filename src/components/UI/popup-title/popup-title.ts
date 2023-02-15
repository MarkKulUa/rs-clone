import Component from "../../../utils/component";
import "./popup-title.css";

class PopupTitle extends Component {
  constructor(parentNode: HTMLElement, popupType: string) {
    super(parentNode, "div", ["popup-title"], `${popupType} to MyHeritage`);
  }
}

export default PopupTitle;
