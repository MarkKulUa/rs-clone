class InputComponent {
  elem: HTMLInputElement;

  constructor(
    parentNode: HTMLElement,
    type: string,
    styles: string[],
    placeholder: string,
    value?: string,
    pattern?: string,
  ) {
    this.elem = document.createElement("input");
    this.elem.setAttribute("type", type);
    // this.elem.setAttribute("required", "required");
    this.elem.classList.add(...styles);
    this.elem.placeholder = placeholder;

    if (parentNode) {
      parentNode.append(this.elem);
    }

    if (value) {
      this.elem.setAttribute("value", value);
    }

    if (pattern) {
      this.elem.setAttribute("pattern", pattern);
    }

    this.elem.addEventListener("input", (event) => this.getInputValue(event));
  }

  delete(): void {
    this.elem.remove();
  }

  getInputValue: (event: Event) => void = () => {};
}

export default InputComponent;
