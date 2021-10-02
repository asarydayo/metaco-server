import { Router } from "express";
const router = Router();

import getAll from "./useCases/getAll";
// Get All Currency
router.get("/", getAll);

export default router;
