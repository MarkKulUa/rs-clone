import Component from "../../utils/component";
import "./profile.css";

class ProfilePage extends Component {
  private profilePageContainer;

  constructor(parentNode: HTMLElement) {
    parentNode.innerHTML = "";
    super(parentNode, "div", ["profile-page"]);
    this.profilePageContainer = new Component(this.elem, "div", ["profile-container"], "");

    // this.profilePageContainer.appendHTML(template());
    // this.familyTreeContainer = document.querySelector(".family-tree-container") as HTMLElement;
  }
}

export default ProfilePage;
