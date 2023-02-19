import Component from "../../utils/component";
import "./team.css";

class TeamPage extends Component {
  private teamPageContainer;

  constructor(parentNode: HTMLElement) {
    parentNode.innerHTML = "";
    super(parentNode, "div", ["team-page"]);
    this.teamPageContainer = new Component(this.elem, "div", ["team-container"], "");

    // this.profilePageContainer.appendHTML(template());
    // this.familyTreeContainer = document.querySelector(".family-tree-container") as HTMLElement;
  }
}

export default TeamPage;
