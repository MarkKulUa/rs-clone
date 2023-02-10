import { AppRoute } from "../types/types";
import Component from "../utils/component";
import TitlePage from "../pages/title/title";
import AboutProject from "../pages/about-project";
import SimpleHeader from "../components/simple-header/simple-header";
import burgerAction from "../components/simple-header/burger-action";
import handleElementScroll from "../pages/about-project/animation";

class Router {
  // model: Model;

  private routes: Array<AppRoute>;

  private defaultRoute: AppRoute;

  titlePage?: Component;

  aboutPage?: Component;

  projectPage?: Component;

  simpleHeader?: Component;

  /* cartPage: Component | undefined;

  errorPage: Component | undefined; */

  currentRoute: string;

  constructor(private rootElement: HTMLElement) {
    // this.model = new Model();
    this.routes = [
      {
        name: "/",
        drawComponent: () => {
          this.titlePage = new TitlePage(this.rootElement);
        },
      },
      {
        name: "/about-project",
        drawComponent: () => {
          this.aboutPage = new AboutProject(this.rootElement);
        },
      },
      /* {
        name: "/project/",
        drawComponent: () => {
          this.projectPage = new ProjectPage(this.rootElement);
        },
      }, */
      /* {
        name: "/cart",
        drawComponent: () => {
          this.commandPage = new CommandPage(this.rootElement);
        },
      }, */
    ];

    this.currentRoute = "/";

    this.defaultRoute = {
      name: "",
      drawComponent: () => {
        this.titlePage = new TitlePage(this.rootElement);
        // this.simpleHeader = new SimpleHeader(this.rootElement);
        this.aboutPage = new AboutProject(this.rootElement);
      },
    };
  }

  updateRouter(): void {
    const currRouteFromHash = window.location.hash.slice(1);
    const currRoute = this.routes.find((page) => page.name === currRouteFromHash);

    (currRoute || this.defaultRoute).drawComponent();

    // /* const currRouteFromHash = window.location.hash.slice(1);
    // const [pagePathName, id = null] = currRouteFromHash.split("/").filter((item) => !!item);

    // const currRouteArray = currRouteFromHash.split("?");
    // const currRouteName = currRouteArray[0];
    // let currRouteParam = "";
    // if (currRouteArray.length > 1) {
    //   currRouteParam = String(currRouteArray[1]);
    // }

    // const currRoute = this.routes.find(
    //   (page) => page.name === currRouteName || page.name === `/${pagePathName}/`,
    // ); */

    // /* if (!currRoute) {
    //   this.currentRoute = currRouteName;
    //   this.defaultRoute.component(currRouteParam, this.model);
    // } else {
    //   !currRouteParam
    //     ? (window.location.hash = currRouteFromHash)
    //     : (window.location.hash = `${currRoute.name}?${currRouteParam}`);
    //   if (id) {
    //     currRoute.component(currRouteParam, this.model, { id: +id });
    //   } else {
    //     currRoute.component(currRouteParam, this.model);
    //   }
    //   this.currentRoute = currRoute.name;
    // } */
    burgerAction();
    window.onscroll = handleElementScroll;
  }

  initRouter(): void {
    // this.model = model;

    if (window.location.hash === "") {
      window.location.hash = "#/";
    }

    window.onpopstate = () => this.updateRouter();
    this.updateRouter();
  }
}

export default Router;
