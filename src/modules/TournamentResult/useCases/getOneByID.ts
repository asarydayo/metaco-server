import { Request, Response } from "express";
import TournamentResult from "modules/TournamentResult/repository";
import { resultWithData } from "modules/TournamentResult/mapper";
import { success as ok, fail, notFound } from "common/responses";

export default async function GetOneByID(req: Request, res: Response) {
  try {
    var { id } = req.params;
    await TournamentResult.getOneByID(id, {
      with_data: Boolean(req.query.with_data == "true"),
    })
      .then((success) => {
        if (success) {
          console.log(success);
          return res.status(200).send(ok(resultWithData(success)));
        }
        return res.status(404).send(notFound());
      })
      .catch((err) => {
        return res.status(500).send(fail(err));
      });
  } catch (error: any) {
    return res.status(500).send(fail(new Error(error)));
  }
}
