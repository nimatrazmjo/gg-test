import { IErrorResponse } from "../interfaces/error-response.interface";
import { CustomError } from "./custom.error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  message = "Not Found";
  constructor() {
    super();
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialize(): IErrorResponse {
    return { message: this.message };
  }
}
