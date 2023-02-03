class Controller {
  constructor(state = {}) {
    this.state = state;
  }

  setState(state) {
    this.state = state;
  }

  async updateRootElement() {
    const root = document.getElementById("app");
    root.innerHTML = null;
    root.appendChild(await this.render());
  }
}

export default Controller;
