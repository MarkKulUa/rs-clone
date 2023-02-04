import Component from "../../utils/component";
import "./footer.css";

class Footer extends Component {
  private footerLeftContainer;

  private githubLogo;

  private teamDeveloperLinks;

  private firstTeamDeveloperLink;

  private secondTeamDeveloperLink;

  private thirdTeamDeveloperLink;

  private appYearContainer;

  private footerRightContainer;

  private rsschool;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["footer"]);

    this.footerLeftContainer = new Component(this.elem, "div", ["footer-left"]);
    this.githubLogo = new Component(this.footerLeftContainer.elem, "a", ["github-logo"]);
    this.teamDeveloperLinks = new Component(this.footerLeftContainer.elem, "div", [
      "team-developers",
    ]);
    this.firstTeamDeveloperLink = new Component(
      this.teamDeveloperLinks.elem,
      "a",
      ["app-developer", "be-developer"],
      "elinven",
    );
    this.secondTeamDeveloperLink = new Component(
      this.teamDeveloperLinks.elem,
      "a",
      ["app-developer", "uk-developer"],
      "MarkKulUa",
    );
    this.thirdTeamDeveloperLink = new Component(
      this.teamDeveloperLinks.elem,
      "a",
      ["app-developer", "be-developer"],
      "bedunkevichaa",
    );
    this.appYearContainer = new Component(this.elem, "div", ["app-year"], "RS Clone 2023");
    this.footerRightContainer = new Component(this.elem, "div", ["footer-right"]);
    this.rsschool = new Component(this.footerRightContainer.elem, "a", ["rsschool"]);

    this.githubLogo.elem.setAttribute(
      "href",
      "https://github.com/rolling-scopes-school/tasks/tree/master/tasks/online-store-team",
    );
    this.firstTeamDeveloperLink.elem.setAttribute("href", "https://github.com/elinven");
    this.firstTeamDeveloperLink.elem.setAttribute("target", "_blank");
    this.secondTeamDeveloperLink.elem.setAttribute("href", "https://github.com/MarkKulUa/");
    this.secondTeamDeveloperLink.elem.setAttribute("target", "_blank");
    this.thirdTeamDeveloperLink.elem.setAttribute("href", "https://github.com/bedunkevichaa/");
    this.thirdTeamDeveloperLink.elem.setAttribute("target", "_blank");
    this.rsschool.elem.setAttribute("href", "https://rs.school/js/");
  }
}

export default Footer;
