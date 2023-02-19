import { IState, TSubscriber } from "../types/types";

class Model {
  private state: IState;

  private subscribers: TSubscriber[];

  constructor() {
    this.state = {
      lang: "en",
      userId: "",
      userName: "",
      token: "",
      searchQuery: "",
    };
    this.subscribers = [];
  }

  getState = () => structuredClone(this.state);

  setState = (state: IState) => {
    this.state = state;
    this.fire();
  };

  subscribe = (callback: TSubscriber) => {
    this.subscribers.push(callback);
  };

  fire = () => {
    this.subscribers.forEach((cb) => cb(this.getState()));
  };
}

export default Model;
