import { IController } from "common/controller/baseController";
import { Op } from "sequelize";

export default class TournamentResultRepository implements IController {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  public async getAll(req?: any) {
    const query: any = {
      include: [
        {
          model: this.models.Team,
          as: "team",
          required: true,
          include: [
            {
              model: this.models.User,
              required: true,
              as: "captain",
            },
            {
              model: this.models.TeamMember,
              required: true,
              as: "members",
            },
            {
              model: this.models.Tournament,
              required: true,
              as: "tournament",
            },
          ],
        },
        {
          model: this.models.Tournament,
          as: "tournament",
          // required: true,
        },
      ],
      where: {
        [Op.or]: {
          "$team.name$": {
            [Op.like]: `%${req.search}%`,
          },
          "$team.captain.name$": {
            [Op.like]: `%${req.search}%`,
          },
        },
      },
    };

    if (req.paginated) {
      query.limit = req.per_page;
      query.offset = req.per_page * req.page - req.per_page;
    }

    return await this.models.TournamentResult.findAll(query);
  }

  public async getOneByID(id: string, req: any = {}) {
    return new Promise(async (resolve, reject) => {
      const query: any = {
        include: [],
        where: { id: id },
      };

      if (req.with_data) {
        query.include.push({
          model: this.models.Team,
          as: "team",
          include: [
            {
              model: this.models.User,
              as: "captain",
            },
            {
              model: this.models.TeamMember,
              as: "members",
              include: [
                {
                  model: this.models.User,
                  as: "person",
                },
              ],
            },
            {
              model: this.models.Tournament,
              as: "tournament",
              // required: true,
            },
          ],
        });
        query.include.push({
          model: this.models.Tournament,
          as: "tournament",
        });
      }

      await this.models.TournamentResult.findOne(query)
        .then((success: any) => {
          resolve(success);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  public async getOneByField(field: string, value: string) {
    return new Promise(async (resolve, reject) => {
      const query: any = {
        where: { [field]: value },
      };

      await this.models.TournamentResult.findOne(query)
        .then((success: any) => {
          resolve(success);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  public async checkIfPositionFilled(tournament: any, position: any) {
    return new Promise(async (resolve, reject) => {
      const query: any = {
        where: { tournament_id: tournament, position: position },
      };

      await this.models.TournamentResult.findOne(query)
        .then((success: any) => {
          resolve(success);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  public async save(data: any) {
    return new Promise(async (resolve, reject) => {
      const new_result: any = {
        tournament_id: data.tournament_id,
        team_id: data.team_id,
        position: data.position,
        point: data.point,
      };

      await this.models.TournamentResult.create(new_result)
        .then(async (success: any) => {
          resolve(await this.getOneByID(success.id, { with_data: true }));
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  public async update(id: string, data: any) {
    return new Promise(async (resolve, reject) => {
      const update_result: any = {
        tournament_id: data.tournament_id,
        team_id: data.team_id,
        position: data.team_id,
        point: data.point,
      };

      await this.models.TournamentResult.update(update_result, {
        where: { id: id },
      })
        .then(async (success: any) => {
          resolve(await this.getOneByID(id));
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  public async destroy(id: string) {
    return new Promise(async (resolve, reject) => {
      await this.models.TournamentResult.destroy({ where: { id: id } })
        .then((success: any) => {
          resolve(success);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  public async exist(id: string) {
    this.getOneByID(id)
      .then(() => true)
      .catch(() => false);
  }
}
