import {
  ICreateUser,
  ILoginUser,
  ILoginData,
  IMessage,
  IUser,
  Methods,
  SERVER_URL,
  StatusCodes,
  ILogoutUser,
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

export const refreshToken = async (token: string): Promise<Response> => {
  try {
    const res = await fetch(`${SERVER_URL}/api/auth/refresh_token`, {
      method: Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(token),
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export const logoutUser = async (userId: ILogoutUser): Promise<Response> => {
  try {
    const res = await fetch(`${SERVER_URL}/api/auth/logout`, {
      method: Methods.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export const getUser = async (userId: string, token: string): Promise<IUser | null> => {
  try {
    const res = await fetch(`${SERVER_URL}/api/user/${userId}`, {
      method: Methods.GET,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data: IUser = await res.json();

    if (res.status === StatusCodes.Ok) {
      return data;
    }
    return null;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const getUsers = async (token: string): Promise<{ users: Array<IUser> } | null> => {
  try {
    const res = await fetch(`${SERVER_URL}//api/user/get-users`, {
      method: Methods.GET,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data: IUser[] = await res.json();

    if (res.status === StatusCodes.Ok) {
      return { users: data };
    }
    return null;
  } catch (err) {
    throw new Error("No users on portal");
  }
};
