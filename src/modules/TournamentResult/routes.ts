import { Router } from "express";
const router = Router();

import getAll from "./useCases/getAll";
import getOne from "./useCases/getOneByID";
import destroy from "./useCases/destroy";
import create from "./useCases/create";
import update from "./useCases/update";

import createValidation from "./validation/create";
import updateValidation from "./validation/update";

import validate from "common/middlewares/validationMiddleware";

// Get All Currency
router.get("/", getAll);

// Create a Currency
router.post("/", [...createValidation, validate], create);

// Get a Currency
router.get("/:id", getOne);

export default router;
