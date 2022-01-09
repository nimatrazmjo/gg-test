import { IErrorResponse } from "../interfaces/error-response.interface";
import { CustomError } from "./custom.error";

export class BadRequestError extends CustomError {
  statusCode: number = 400;
  constructor(message?: string) {
    super(message)
  }

  serialize(): IErrorResponse {
    return {
      message: this.message
    }
  }
}