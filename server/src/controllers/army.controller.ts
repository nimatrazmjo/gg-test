import { Request, Response } from "express";

const generateArmyController = (req: Request, res: Response) => {
  res.status(200).json({})
}

export {
  generateArmyController
}