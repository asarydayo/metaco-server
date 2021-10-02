import { Router } from "express";
const router = Router();

import user from "modules/User/routes";
import team from "modules/Team/routes";
import tournament_result from "modules/TournamentResult/routes";
// import currency from "modules/currency/routes";

router.use("/user", user);
router.use("/team", team);
router.use("/leaderboard", tournament_result);
// router.use("/exchange_rate", exchange_rate);

export default router;
