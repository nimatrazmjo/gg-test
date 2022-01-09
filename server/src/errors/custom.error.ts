import { IErrorResponse } from "../interfaces/error-response.interface";

export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(meesage?: string) {
    super(meesage)
  }

  abstract serialize(): IErrorResponse
}