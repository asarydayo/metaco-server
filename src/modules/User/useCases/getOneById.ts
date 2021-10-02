import { Request, Response } from "express";
import UserRepository from "modules/User/repository";
import { userWithResults } from "modules/User/mapper";
import { success as ok, fail, notFound } from "common/responses";

export default async function create(req: Request, res: Response) {
  try {
    var { id } = req.params;
    await UserRepository.getOneByID(id, {
      with_data: Boolean(req.query.with_data == "true"),
    })
      .then((success) => {
        if (success) {
          return res.status(200).send(ok(userWithResults(success)));
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
