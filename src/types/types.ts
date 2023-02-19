import Model from "../model/model";

// Стейт как пропсы всего приложения
export interface IState {
  lang: string;
  userId: string;
  userName: string;
  token: string;
  searchQuery: string;
  perPage?: number;
  sortBy?: string;
  page?: number;
  section?: string;
  handleSection?: (target: HTMLButtonElement) => void;
}

export type TSubscriber = (state: IState) => void;

export interface IMain {
  render?: () => void;
  handleSection?: (target: HTMLButtonElement) => void;
}

export interface AppRoute {
  name: string;
  drawComponent: (model: Model) => void;
}

export interface ICreateUser {
  email: string;
  fullname: string;
  password: string;
}

export interface ILoginUser {
  login: string;
  password: string;
}

export interface IUserData {
  email: string;
  fullName: string;
  token: string;
  refreshToken: string;
  userId: string; // "63e75c473192dabecf01a8c2";
  notifications: [];
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export interface Person {
  gender: Gender;
  birthYear: number;
  birthDate: Date;
  birthPlace: string;
  firstName: string;
  lastName: string;
  maidenName?: string;
  motherId: string;
  fatherId: string;
  avatarLink: string;
  country: string;
  city: string;
  address: string;
  email: string;
  phone: string;
}

export const MAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const PASSWORD_REGEXP = /\S{6,}/i;

export const SERVER_URL = "http://localhost:3000";

export enum StatusCodes {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export enum Methods {
  DELETE = "DELETE",
  GET = "GET",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

export enum Languages {
  EN = "en",
  BE = "be",
  UK = "uk",
}
