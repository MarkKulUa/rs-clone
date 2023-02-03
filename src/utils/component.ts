class Component {
  elem: HTMLElement;

  constructor(parentNode: HTMLElement,
              tagName: keyof HTMLElementTagNameMap = "div",
              styles: string[] = [],
              textContent = "")
  {
    this.elem = document.createElement(tagName);
    this.elem.classList.add(...styles);
    this.elem.textContent = textContent;

    if (parentNode) {
      parentNode.append(this.elem);
    }
  }

  delete(): void {
    this.elem.remove();
  }

  clear(): void {
    this.elem.innerHTML = "";
  }
}

export default Component;