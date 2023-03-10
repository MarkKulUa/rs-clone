import { IState } from "../types/types";
import Header from "../components/header/header";
import Main from "../components/main";

/* class App {
  protected state: IState;

  constructor() {
    this.state = {
      section: "section1",
      page: 1,
      perPage: 4,
      sortBy: "id",
    };
  }

  // async initState() {
  //   const { page, perPage } = this.state;
  // }

  handleSection(target: HTMLButtonElement) {
    if (target.dataset.page === "section1") {
      this.setState({ ...this.state, section: "section1", page: 1 });
    } else {
      this.setState({
        ...this.state,
        section: "section2",
        page: 1,
      });
    }
    this.updateRootElement();
  }

  handlePrevPage() {
    if (this.state.page === undefined) {
      return;
    }
    this.setState({
      ...this.state,
      page: this.state.page - 1,
    });
    this.updateRootElement();
  }

  async render() {
    // await this.initState();
    const header = new Header({
      section: this.state.section,
      handleSection: this.handleSection,
    });

    const main = new Main({
      ...this.state,
    });

    const appHtml = new DocumentFragment();

    appHtml.appendChild(await main.render());
    appHtml.appendChild(header.render());

    return appHtml;
  }

  setState(state: IState) {
    this.state = state;
  }

  async updateRootElement() {
    const root = document.getElementById("app") as Element;
    root.innerHTML = "";
    return root.appendChild(await this.render());
  }
}

export default App; */
