export const openLoginPopup = (e: MouseEvent) => {
  // const loginLink = <Element>document.querySelector(".login");
  const loginLink = document.querySelectorAll(".login") as NodeListOf<
    HTMLElement & { style: CSSStyleDeclaration }
  >;
  const loginPopup = <Element>document.querySelector(".login-popup");
  loginLink.forEach((el) => {
    if (e.target === el) {
      loginPopup.classList.add("open");
      document.body.classList.add("scroll-lock");
    }
  });
};

export const goToRegisterPopup = () => {
  const loginPopup = <Element>document.querySelector(".login-popup");
  loginPopup.classList.remove("open");
  document.body.classList.remove("scroll-lock");
  const registerPopup = <Element>document.querySelector(".register-popup");
  registerPopup.classList.add("open");
  document.body.classList.add("scroll-lock");
};

export const closeLoginPopup = () => {
  const loginPopup = <Element>document.querySelector(".login-popup");
  loginPopup.classList.remove("open");
  document.body.classList.remove("scroll-lock");
};
