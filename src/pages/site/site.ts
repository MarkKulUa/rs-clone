import Component from "../../utils/component";
import "./site.css";

class SitePage extends Component {
  private sitePageContainer;

  private siteTopContainer;

  private siteHeadingContainer;

  private siteCoverPhotoLoader;

  private photoLoaderBtnContainer;

  private photoLoaderBtn;

  constructor(parentNode: HTMLElement) {
    parentNode.innerHTML = "";
    super(parentNode, "div", ["site-page"]);
    this.sitePageContainer = new Component(this.elem, "div", ["site-container"], "");
    this.siteTopContainer = new Component(
      this.sitePageContainer.elem,
      "div",
      ["top-container"],
      "",
    );
    this.siteHeadingContainer = new Component(
      this.siteTopContainer.elem,
      "div",
      ["heading-container"],
      "My Web Site",
    );
    this.siteCoverPhotoLoader = new Component(
      this.siteTopContainer.elem,
      "div",
      ["photo-loader"],
      "UPLOAD COVER PHOTO",
    );
    this.photoLoaderBtnContainer = new Component(
      this.siteCoverPhotoLoader.elem,
      "div",
      ["btn-container"],
      "",
    );
    this.photoLoaderBtn = new Component(
      this.photoLoaderBtnContainer.elem,
      "div",
      ["photo-btn"],
      "",
    );

    // this.profilePageContainer.appendHTML(template());
    // this.familyTreeContainer = document.querySelector(".family-tree-container") as HTMLElement;
  }
}

export default SitePage;
