import { AppRoute } from "../types/types";
import Component from "../utils/component";
import TitlePage from "../pages/title/title";
import AboutProject from "../pages/about/about";
import burgerAction from "../components/simple-header/burger-action";
import handleElementScroll from "../pages/about/animation";
import animationRecords from "../pages/about/animation-records";
import carousel from "../pages/about/quotes-carousel";

class Router {
  // model: Model;

  private routes: Array<AppRoute>;

  private defaultRoute: AppRoute;

  titlePage?: Component;

  aboutPage?: Component;

  // teamPage?: Component;

  // errorPage: Component | undefined;

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
        name: "/about",
        drawComponent: () => {
          this.aboutPage = new AboutProject(this.rootElement);
        },
      },
      /* {
        name: "/login",
        drawComponent: () => {
          this.projectPage = new LoginPage(this.rootElement);
        },
      }, */
      /* {
        name: "/team",
        drawComponent: () => {
          this.commandPage = new TeamPage(this.rootElement);
        },
      }, */
    ];

    this.currentRoute = "/";

    this.defaultRoute = {
      name: "",
      drawComponent: () => {
        this.titlePage = new TitlePage(this.rootElement);
        // this.simpleHeader = new SimpleHeader(this.rootElement);
        // this.aboutPage = new AboutProject(this.rootElement);
      },
    };
  }

  updateRouter(): void {
    const currRouteFromHash = window.location.hash.slice(1);
    const currRoute = this.routes.find((page) => page.name === currRouteFromHash);

    (currRoute || this.defaultRoute).drawComponent();

    // /* const currRouteFromHash = window.location.hash.slice(1);
    // const [pagePathName, id = null] = currRouteFromHash.split("/").filter((item) => !!item);

    const currRouteArray = currRouteFromHash.split("?");
    const currRouteName = currRouteArray[0];
    let currRouteParam = "";
    if (currRouteArray.length > 1) {
      currRouteParam = String(currRouteArray[1]);
    }

    // const currRoute = this.routes.find(
    //   (page) => page.name === currRouteName || page.name === `/${pagePathName}/`,
    // ); */

    if (!currRoute) {
      this.currentRoute = currRouteName;
      // this.defaultRoute.drawComponent(currRouteParam, this.model);
    } else {
      if (!currRouteParam) {
        window.location.hash = currRouteFromHash;
      } else {
        window.location.hash = `${currRoute.name}?${currRouteParam}`;
      }
      //  ? (window.location.hash = currRouteFromHash)
      //  : (window.location.hash = `${currRoute.name}?${currRouteParam}`);
      //   if (id) {
      //     currRoute.component(currRouteParam, this.model, { id: +id });
      //   } else {
      //     currRoute.component(currRouteParam, this.model);
      //   }
      this.currentRoute = currRoute.name;
    }
    burgerAction();
    window.onscroll = handleElementScroll;
    animationRecords();
    carousel();
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
