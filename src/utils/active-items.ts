import Model from "../model/model";

export const setActiveNavLink = (e: MouseEvent) => {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((item) => {
    item.classList.remove("active");
    if (item === e.target) {
      item.classList.add("active");
      /* const model = new Model();
      const state = model.getState();
      console.log(state.lang);
      model.setState({
        ...state,
        lang: <string>item.textContent,
      });
      console.log(model); */
    }
  });
};

export const setActiveLanguage = (e: MouseEvent) => {
  const langSpans = document.querySelectorAll(".lang-span");
  langSpans.forEach((item) => {
    item.classList.remove("active");
    if (item === e.target) {
      item.classList.add("active");
      const model = new Model();
      const state = model.getState();
      console.log(state.lang);
      model.setState({
        ...state,
        lang: <string>item.textContent,
      });
      console.log(model);
    }
  });
};
