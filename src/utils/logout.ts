import { logoutUser } from "../api/api";
import Model from "../model/model";
import { StatusCodes } from "../types/types";

const logoutAccount = async (e: MouseEvent): Promise<void> => {
  const logoutLink = <Element>document.querySelector(".logout");
  const model = new Model();
  const state = model.getState();
  if (e.target === logoutLink) {
    const data = await logoutUser(state.userId);
    model.setState({
      ...state,
      userId: "",
    });
  }
};

export default logoutAccount;
