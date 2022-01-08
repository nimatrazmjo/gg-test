import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom.error";
import { IErrorResponse } from "../types/error-response.interface";

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message: IErrorResponse = { message: error.message };
  if (error.serialize && error?.serialize()) {
    message = error.serialize();
  }
  let statusCode: number = 500;
  if (error.statusCode) {
    statusCode = error.statusCode;
  }

  return res.status(statusCode).json(message);
};
