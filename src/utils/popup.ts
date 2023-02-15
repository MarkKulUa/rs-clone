export const openLoginPopup = (e: MouseEvent) => {
  const loginLink = <Element>document.querySelector(".login");
  const loginPopup = <Element>document.querySelector(".login-popup");
  if (e.target === loginLink) {
    loginPopup.classList.add("open");
    document.body.classList.add("scroll-lock");
  }
};

export const goToRegisterPopup = () => {
  const loginPopup = <Element>document.querySelector(".login-popup");
  loginPopup.classList.remove("open");
  document.body.classList.remove("scroll-lock");
  const registerPopup = <Element>document.querySelector(".register-popup");
  registerPopup.classList.add("open");
  document.body.classList.add("scroll-lock");
};
