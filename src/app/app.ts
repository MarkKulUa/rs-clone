import Header from "../components/header";
import Component from "../utils/component";
import Router from "../router";
import Footer from "../components/footer/footer";

class App {
  private header;

  private main;

  private router;

  private footer;

  isHeader = false;

  constructor(private rootElement: HTMLElement) {
    const isHeader = false;
    if (isHeader) {
      this.header = new Header(this.rootElement);
    } else {
      this.header = "";
    }
    this.main = new Component(this.rootElement, "main", ["main"]);
    this.router = new Router(this.main.elem);
    this.footer = new Footer(this.rootElement);
  }

  /* async render() {
    const header = new Header(this.rootElement);
    const main = new Component(this.rootElement, "main", ["main"]);
    const router = new Router(main.elem);
    const footer = new Footer(this.rootElement);
  } */

  start(): void {
    // this.render();

    /* const model = new Model();

    cardsInfo().then((res) => {

      const state = model.getState();

      model.setState({
        ...state,
        products: res.products,
      }); */

    this.router.initRouter();
    // });
  }
}

export default App;
