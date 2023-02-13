// Стейт как пропсы всего приложения
export interface IState {
  perPage?: number;
  sortBy?: string;
  page?: number;
  section?: string;
  handleSection?: (target: HTMLButtonElement) => void;
}

export interface IMain {
  render?: () => void;
  handleSection?: (target: HTMLButtonElement) => void;
}

export interface AppRoute {
  name: string;
  // component: (params: string, model: Model, options?: { id: number }) => void;
  drawComponent: () => void;
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

export enum Sex {
  Male = "Male",
  Female = "Female",
}
