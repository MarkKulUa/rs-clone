import { IState, TSubscriber } from "../types/types";

class Model {
  private state: IState;

  private subscribers: TSubscriber[];

  constructor() {
    this.state = {
      lang: localStorage.getItem("lang") ?? "en",
      navLink: localStorage.getItem("navLink") ?? "",
      userId: localStorage.getItem("userId") ?? "",
      userName: localStorage.getItem("userName") ?? "",
      token: localStorage.getItem("token") ?? "",
      rToken: localStorage.getItem("rToken") ?? "",
      searchQuery: "",
    };
    this.subscribers = [];
  }

  getState = () => structuredClone(this.state);

  setState = (state: Partial<IState>) => {
    this.state = { ...this.state, ...state };
    // this.state = state;
    this.fire();
  };

  subscribe = (callback: TSubscriber) => {
    this.subscribers.push(callback);
  };

  private fire = () => {
    this.subscribers.forEach((cb) => cb(this.getState()));
  };
}

export default new Model();
