// Стейт как пропсы всего приложения
export interface IState {
  lang: string;
  navLink: string;
  userId: string;
  userName: string;
  token: string;
  rToken: string;
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
  drawComponent: (params?: string) => void;
}

export interface ICreateUser {
  email: string;
  fullName: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginData {
  email: string;
  fullName: string;
  token: string;
  refreshToken: string;
  userId: string; // "63e75c473192dabecf01a8c2";
  notifications: [];
}

export interface IUser {
  trees: [];
  notifications: [];
  _id: string;
  email: string;
  password: string;
  fullName: string;
}

export interface ILogoutUser {
  userId: string;
}

export interface IMessage {
  message: string;
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export interface IPerson {
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
  ownerId: string;
}

export interface IEvent {
  title: string;
  dateTime: Date;
  place: string;
  description: string;
  isFamily: boolean;
}

export interface IPhoto {
  date: Date;
  place: string;
  album: string;
  notes: string;
  link: string;
}

export interface IUserData {
  userId: string;
  fullName: string;
  age: number;
  avatar: string;
  email: string;
  country: string;
  siteId: string;
  siteDate: Date;
  siteCover: string;
  visits: number;
  events: IEvent[];
  persons: IPerson[];
  photos: IPhoto[];
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
