import { Router } from "express";
const router = Router();

import getAll from "./useCases/getAll";
import getOneById from "./useCases/getOneById";
// Get All Currency
router.get("/", getAll);
router.get("/:id", getOneById);

export default router;
