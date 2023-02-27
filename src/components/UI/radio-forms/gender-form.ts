import Component from "../../../utils/component";
import "./gender-form.css";
import template from "./template";

class GenderForm extends Component {
  constructor(parentNode: HTMLElement) {
    super(parentNode, "form", ["gender-form"]);
    this.appendHTML(template());
  }
}

export default GenderForm;
