import template from "./template";
import Component from "../../utils/component";
import "./about.css";
import SimpleHeader from "../../components/simple-header/simple-header";

class AboutProject extends Component {
  // private aboutPageContainer;

  private simpleHeader: SimpleHeader;

  constructor(parentNode: HTMLElement) {
    parentNode.innerHTML = "";
    super(parentNode, "div", ["about-page"]);
    // this.aboutPageContainer =
    // new Component(this.elem, "div", ["about-container", "container"], "");
    // this.simpleHeader = new SimpleHeader(this.aboutPageContainer.elem);
    // this.aboutPageContainer.appendHTML(template());
    this.simpleHeader = new SimpleHeader(this.elem);
    this.appendHTML(template());
  }
}

export default AboutProject;
