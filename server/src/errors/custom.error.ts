import { IErrorResponse } from "../types/error-response.interface";

export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(meesage?: string) {
    super(meesage)
  }

  abstract serialize():IErrorResponse
}