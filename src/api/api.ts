import {
  ICreateUser,
  ILoginUser,
  IUserData,
  Methods,
  SERVER_URL,
  StatusCodes,
} from "../types/types";

export const createUser = async (user: ICreateUser): Promise<void> => {
  try {
    const data = await fetch(`${SERVER_URL}/api/auth/register`, {
      method: Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    throw new Error(String(error));
  }
};

export const loginUser = async (loginData: ILoginUser): Promise<IUserData | null> => {
  try {
    const data = await fetch(`${SERVER_URL}/api/auth/login`, {
      method: Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const res: IUserData = await data.json();
    if (data.status === StatusCodes.Ok) {
      return res;
    }
    return null;
  } catch (error) {
    throw new Error("User log in error");
  }
};

export const logoutUser = async (userId: string): Promise<string> => {
  try {
    const data = await fetch(`${SERVER_URL}/api/auth/logout`, {
      method: Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    });
    if (data.status === StatusCodes.Ok) {
      const res = await data.json();
      return res;
    }
    return "";
  } catch (error) {
    throw new Error(String(error));
  }
};
