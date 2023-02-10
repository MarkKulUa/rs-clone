import template from "./template";
import Component from "../../utils/component";
import "./style.css";

class AboutProject extends Component {
  // private titlePage;
  private aboutPageContainer;

  // private simpleHeader: SimpleHeader;

  constructor(parentNode: HTMLElement) {
    parentNode.innerHTML = "";
    super(parentNode, "div", ["about-roject"]);
    this.aboutPageContainer = new Component(this.elem, "div", ["about-project-container", "container"], "");
    // this.simpleHeader = new SimpleHeader(this.titlePageContainer.elem);
    this.aboutPageContainer.appendHTML(template());
  }
}

export default AboutProject;
