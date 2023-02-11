function burgerAction() {
  const burger = document.querySelector(".burger") as HTMLElement;
  const nav = document.querySelector(".nav-list") as HTMLElement;
  const overlay = document.querySelector(".overlay") as HTMLElement;

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
    burger.classList.toggle("open");
    overlay.classList.toggle("overlay-active");
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("show");
    burger.classList.remove("open");
    nav.classList.add("hide");
    overlay.classList.remove("overlay-active");
  });
}
export default burgerAction;
