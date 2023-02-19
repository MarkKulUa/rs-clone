import Component from "../../utils/component";
import "./site.css";

class Site extends Component {
  private sitePageContainer;

  constructor(parentNode: HTMLElement) {
    parentNode.innerHTML = "";
    super(parentNode, "div", ["site-page"]);
    this.sitePageContainer = new Component(this.elem, "div", ["site-container"], "");

    // this.profilePageContainer.appendHTML(template());
    // this.familyTreeContainer = document.querySelector(".family-tree-container") as HTMLElement;
  }
}

export default Site;
