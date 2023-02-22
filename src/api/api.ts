import {
  ICreateUser,
  ILoginUser,
  IMessage,
  IUserData,
  Methods,
  SERVER_URL,
  StatusCodes,
} from "../types/types";

export const createUser = async (user: ICreateUser): Promise<Response> => {
  try {
    const res = await fetch(`${SERVER_URL}/api/auth/register`, {
      method: Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export const loginUser = async (loginData: ILoginUser): Promise<Response> => {
  try {
    const res = await fetch(`${SERVER_URL}/api/auth/login`, {
      method: Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export const logoutUser = async (userId: string): Promise<string> => {
  try {
    const res = await fetch(`${SERVER_URL}/api/auth/logout`, {
      method: Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    });
    if (res.status === StatusCodes.Ok) {
      const data = await res.json();
      return data.message;
    }
    return "";
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};
