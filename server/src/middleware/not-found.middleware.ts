import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/not-found.error";

export const notFound = (
  req: Request,
  err: Response,
  next: NextFunction
) => {
  throw new NotFoundError()
}