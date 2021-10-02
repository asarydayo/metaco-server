import { check } from "express-validator";
import TournamentResult from "modules/TournamentResult/repository";

export default [
  check("tournament_id")
    .notEmpty()
    .withMessage("Tournament is required.")
    .trim()
    .escape(),
  check("team_id").notEmpty().withMessage("Team is required.").trim().escape(),
  check("position")
    .notEmpty()
    .withMessage("Position is required.")
    .custom(async (value, data: any) => {
      return await TournamentResult.checkIfPositionFilled(
        data.req.body.tournament_id,
        value
      ).then((success) => {
        if (success) {
          return Promise.reject(
            `Position ${value} is already filled on this tournament`
          );
        }
      });
    }),
  // check("currency_code").custom(async (value) => {
  //   return await CurrencyRepository.getOneByField("currency_code", value).then(
  //     (success) => {
  //       if (success) {
  //         return Promise.reject("Currency code already exist.");
  //       }
  //     }
  //   );
  // }),
];
