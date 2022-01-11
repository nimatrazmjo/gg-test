import { Request, Response } from "express";
import { ArmyInterface } from "../interfaces/army.interface";

const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const armies =  (totalArmy: number): ArmyInterface => {
  const spearmen =  getRandomIntInclusive(1, totalArmy - 2);
  const swordsmen =  getRandomIntInclusive(1, totalArmy - 1 - spearmen);
  const archers = totalArmy - (spearmen + swordsmen);
  return { spearmen, swordsmen, archers }; 
};

const generateArmyController = (req: Request, res: Response) => {
  res.status(200).json(armies(+req.params.totalArmy));
};

export { generateArmyController };
