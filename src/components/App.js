import Header from "./header/index";
import Main from "./main/index";

import Controller from "../helpers/Controller";
import fetchData from "../helpers/fetchData";

class App extends Controller {
  constructor() {
    super();
    this.state = {

    };
  }

  async initState() {

  }

  handleSection(target) {
    this.updateRootElement();
  }

  async render() {
    await this.initState();
    const header = new Header({
      section: this.state.section,
      handleSection: this.handleSection,
    });

    const main = new Main({
      section: this.state.section,
      handleSection: this.handleSection,
    });

    const appHtml = new DocumentFragment();

    appHtml.appendChild(header.render());
    appHtml.appendChild(await main.render());

    return appHtml;
  }
}

export default App;
