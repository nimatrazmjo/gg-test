import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request.error";

export const minimumArmy = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (+req.params.totalArmy < 3) {
    throw new BadRequestError('Total armies atleast should be 3');
  }
  next();
}