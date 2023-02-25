import SimpleHeader from "../../components/simple-header/simple-header";
import Model from "../../model/model";
import Component from "../../utils/component";
import template from "./template";
import "./title.css";

class TitlePage extends Component {
  // private titlePage;
  private titlePageContainer;

  private simpleHeader: SimpleHeader;

  constructor(parentNode: HTMLElement) {
    parentNode.innerHTML = "";
    super(parentNode, "div", ["title-page"]);
    this.titlePageContainer = new Component(this.elem, "div", ["title-container", "container"], "");
    this.simpleHeader = new SimpleHeader(this.titlePageContainer.elem);
    this.titlePageContainer.appendHTML(template());
  }
}

export default TitlePage;
