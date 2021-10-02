import { Request, Response } from "express";
import TournamentResult from "modules/TournamentResult/repository";
import UserRepository from "modules/User/repository";
import TeamRepository from "modules/Team/repository";
import { result } from "modules/TournamentResult/mapper";
import { success as ok, fail } from "common/responses";

export default async function create(req: Request, res: Response) {
  try {
    const new_result = {
      tournament_id: req.body.tournament_id,
      team_id: req.body.team_id,
      position: req.body.position,
      point: 0,
    };

    switch (new_result.position) {
      case 1:
        new_result.point = 5;
        break;
      case 2:
        new_result.point = 3;
        break;
      case 3:
        new_result.point = 2;
        break;
      default:
        new_result.point = 0;
        break;
    }

    var getTeam: any = await TeamRepository.getOneByID(new_result.team_id, {
      with_data: true,
    });

    if (getTeam) {
      if (getTeam.members) {
        await Promise.all(
          getTeam.members.map(async (item: any) => {
            await UserRepository.updateCoins(item.user_id, new_result.point);
          })
        );
      }
    }

    await TournamentResult.save(new_result)
      .then((success) => {
        return res.status(200).send(ok(result(success)));
      })
      .catch((err) => {
        return res.status(500).send(fail(err));
      });
  } catch (error: any) {
    return res.status(500).send(fail(new Error(error)));
  }
}
