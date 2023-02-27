import Model from "../model/model";

export const setActiveNavLink = (e: MouseEvent) => {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((item) => {
    item.classList.remove("active-color");
    if (item === e.target) {
      item.classList.add("active-color");
      Model.setState({
        navLink: item.getAttribute("href") ?? "",
      });
      console.log(Model.getState());
    }
  });
};

export const setActiveLanguage = (e: MouseEvent) => {
  const langSpans = document.querySelectorAll(".lang-span");
  langSpans.forEach((item) => {
    item.classList.remove("active-color");
    if (item === e.target) {
      item.classList.add("active-color");
      Model.setState({
        lang: <string>item.textContent,
      });
      console.log(Model.getState());
    }
  });
};
