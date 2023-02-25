import { AppRoute } from "../types/types";
import Component from "../utils/component";
import TitlePage from "../pages/title/title";
import AboutProject from "../pages/about/about";
import burgerAction from "../components/simple-header/burger-action";
import handleElementScroll from "../pages/about/animation";
import animationRecords from "../pages/about/animation-records";
import carousel from "../pages/about/quotes-carousel";
import Header from "../components/header/header";
import TeamPage from "../pages/team/team";

class Router {
  private routes: Array<AppRoute>;

  private defaultRoute: AppRoute;

  header?: Component;

  titlePage?: Component;

  aboutPage?: Component;

  teamPage?: Component;

  // errorPage: Component | undefined;

  currentRoute: string;

  constructor(private rootElement: HTMLElement) {
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
      {
        name: "/team",
        drawComponent: () => {
          // this.teamPage = new TeamPage(this.rootElement);
          this.titlePage = new TitlePage(this.rootElement);
        },
      },
      {
        name: "/site",
        drawComponent: (params) => {
          this.rootElement.innerHTML = "";
          this.header = new Header(this.rootElement);
        },
      },
    ];

    this.currentRoute = "/";

    this.defaultRoute = {
      name: "",
      drawComponent: () => {
        this.titlePage = new TitlePage(this.rootElement);
      },
    };
  }

  updateRouter(): void {
    const currRouteFromHash = window.location.hash.slice(1);
    console.log(currRouteFromHash);

    // const [pagePathName, id = null] = currRouteFromHash.split("/").filter((item) => !!item);

    const currRouteArray = currRouteFromHash.split("?");
    const currRouteName = currRouteArray[0];
    let currRouteParam = "";
    if (currRouteArray.length > 1) {
      currRouteParam = String(currRouteArray[1]);
    }

    console.log(currRouteParam);

    const currRoute = this.routes.find((page) => page.name === currRouteFromHash);
    console.log(currRoute);

    // const currRoute = this.routes.find(
    //   (page) => page.name === currRouteName || page.name === `/${pagePathName}/`,
    // );

    // window.location.search = "";

    if (!currRoute) {
      this.currentRoute = currRouteName;
      this.defaultRoute.drawComponent();
    } else {
      if (currRouteParam === "") {
        window.location.hash = currRouteFromHash;
      } else {
        window.location.hash = `${currRoute.name}?${currRouteParam}`;
        console.log(`${currRoute.name}?${currRouteParam}`);
      }
      //  ? (window.location.hash = currRouteFromHash)
      //  : (window.location.hash = `${currRoute.name}?${currRouteParam}`);
      //   if (id) {
      //     currRoute.component(currRouteParam, this.model, { id: +id });
      //   } else {
      //     currRoute.component(currRouteParam, this.model);
      //   }
      currRoute.drawComponent();
      this.currentRoute = (currRoute || this.defaultRoute).name;
    }
    burgerAction();
    window.onscroll = handleElementScroll;
    animationRecords();
    carousel();
  }

  initRouter(): void {
    if (window.location.hash === "") {
      window.location.hash = "#/";
    }

    window.onpopstate = () => this.updateRouter();
    this.updateRouter();
  }
}

export default Router;
