import { Router } from "express";
import { generateArmyController } from "../controllers/army.controller";
import { minimumArmy } from "../middlewares/minimum-army.middleware";

const router = Router();

router.get('/armies/:total', minimumArmy, generateArmyController);

export { router as armyRouter }