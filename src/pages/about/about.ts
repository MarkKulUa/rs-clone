import template from "./template";
import Component from "../../utils/component";
import "./about.css";
import SimpleHeader from "../../components/simple-header/simple-header";
import Model from "../../model/model";

class AboutProject extends Component {
  private aboutPageContainer;

  private familyTreeContainer;

  private simpleHeader: SimpleHeader;

  private header;

  private navList;

  constructor(parentNode: HTMLElement, model: Model) {
    parentNode.innerHTML = "";
    super(parentNode, "div", ["about-page"]);
    this.aboutPageContainer = new Component(this.elem, "div", ["about-container"], "");

    this.aboutPageContainer.appendHTML(template());
    this.familyTreeContainer = document.querySelector(".family-tree-container") as HTMLElement;
    this.simpleHeader = new SimpleHeader(this.familyTreeContainer, model);

    this.header = document.querySelector(".simple-header") as HTMLElement;
    this.header.classList.add("header-about");

    this.navList = document.querySelector(".nav-list") as HTMLElement;
    this.navList.classList.add("nav-list-about");
  }
}

export default AboutProject;
