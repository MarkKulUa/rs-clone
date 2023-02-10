function burgerAction() {
  const burger = document.querySelector(".burger") as HTMLElement;
  const nav = document.querySelector(".nav-list") as HTMLElement;
  const overlay = document.querySelector(".overlay") as HTMLElement;

  console.log(burger);
  console.log(nav);
  console.log(overlay);
  burger.addEventListener("click", () => {
    console.log("burger clicked");
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
