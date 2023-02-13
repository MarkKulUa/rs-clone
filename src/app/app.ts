import Header from "../components/header/header";
import Component from "../utils/component";
import Router from "../router";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import Register from "../components/register/register";

class App {
  private login;

  private register;

  private header;

  private main;

  private router;

  constructor(private rootElement: HTMLElement) {
    this.register = new Register(this.rootElement, "Sign in");
    this.login = new Login(this.rootElement, "Log in");
    const isHeader = false;
    if (isHeader) {
      this.header = new Header(this.rootElement);
    } else {
      this.header = "";
    }
    this.main = new Component(this.rootElement, "main", ["main"]);
    this.router = new Router(this.main.elem);
    const footer = new Footer(this.rootElement);
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
