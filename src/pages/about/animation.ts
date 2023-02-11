function handleElementScroll(): void {
  const fatherParents = document.querySelector(".father-parents") as HTMLElement;
  const motherParents = document.querySelector(".mother-parents") as HTMLElement;
  const father = document.querySelector(".parent-father-container") as HTMLElement;
  const mother = document.querySelector(".parent-mother-container") as HTMLElement;
  const parentsConnector = document.querySelectorAll(".parents-connector") as NodeListOf<HTMLElement & { style: CSSStyleDeclaration }>;
  const loginButton = document.querySelector(".login-button") as HTMLElement;

  function getOpacity(a: HTMLElement) {
    const rect = a.getBoundingClientRect();
    let opacity = 1;
    if (rect.top + (rect.height / 2) > window.innerHeight / 2) {
      opacity = 1 - Math.abs(rect.top
        + (rect.height / 2)
        - (window.innerHeight / 2)) / (window.innerHeight / 2);
    }
    opacity = Math.max(0, Math.min(1, opacity));
    return opacity;
  }

  function getScale(a: HTMLElement) {
    const rect = a.getBoundingClientRect();
    let scale = 1;
    if (rect.top + (rect.height / 2) > window.innerHeight / 2) {
      scale = 1 - (rect.top + (rect.height / 2) - window.innerHeight / 2)
      / (window.innerHeight / 2);
    }
    scale = Math.max(0, Math.min(1, scale));
    return scale;
  }

  fatherParents.style.opacity = `${getOpacity(fatherParents)}`;
  motherParents.style.opacity = `${getOpacity(motherParents)}`;
  father.style.opacity = `${getOpacity(father)}`;
  mother.style.opacity = `${getOpacity(mother)}`;
  father.style.transform = `scale(${getScale(father)})`;
  mother.style.transform = `scale(${getScale(mother)})`;
  parentsConnector.forEach((el) => {
    el.style.opacity = `${getOpacity(el)}`;
    el.style.transform = `scale(${getScale(el)})`;
  });
  loginButton.style.opacity = `${getOpacity(loginButton)}`;
}

window.onscroll = handleElementScroll;

export default handleElementScroll;
