import App from "./components/App";
import "./style.css";

async function init() {
  const root = document.getElementById("app") as HTMLElement;
  const app = new App();

  root?.appendChild(await app.render());
}

init();
