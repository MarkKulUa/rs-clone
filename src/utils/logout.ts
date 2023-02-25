import { logoutUser } from "../api/api";
import Model from "../model/model";
import { ILogoutUser, StatusCodes } from "../types/types";

const logoutAccount = async (e: MouseEvent): Promise<void> => {
  const logoutLink = <Element>document.querySelector(".logout");
  if (e.target === logoutLink) {
    const state = Model.getState();
    console.log(state.userId);
    const { userId } = state;
    const user: ILogoutUser = { userId };
    const res = await logoutUser(user);
    console.log(res);
    if (res.status === StatusCodes.Ok) {
      const data = await res.json();
      console.log(data);
      Model.setState({
        userId: "",
        userName: "",
        token: "",
        rToken: "",
      });
      window.location.hash = "#/";
    }
  }
};

export default logoutAccount;
