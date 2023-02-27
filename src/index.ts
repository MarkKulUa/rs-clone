import App from "./app/app";
import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.body;
  const app = new App(rootElement);

  app.start();
});
