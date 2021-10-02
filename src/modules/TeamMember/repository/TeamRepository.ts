import { IController } from "common/controller/baseController";
import { Op } from "sequelize";

export default class TeamRepository implements IController {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  public async getAll(req?: any) {
    const query: any = {
      include: [],
      where: {
        [Op.or]: {
          name: {
            [Op.like]: `%${req.search}%`,
          },
        },
      },
    };

    if (req.paginated) {
      query.limit = req.per_page;
      query.offset = req.per_page * req.page - req.per_page;
    }

    if (req.with_members) {
      query.include.push({
        model: this.models.User,
        as: "captain",
      });
      query.include.push({
        model: this.models.TeamMember,
        as: "members",
      });
    }
    if (req.with_result) {
      query.include.push({
        model: this.models.TournamentResult,
        as: "results",
      });
    }

    return await this.models.Team.findAll(query);
  }

  public async getOneByID(id: string) {
    return new Promise(async (resolve, reject) => {
      const query: any = {
        where: { id: id },
      };

      await this.models.Team.findOne(query)
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

      await this.models.Team.findOne(query)
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
      const new_team: any = {
        name: data.name,
        captain_id: data.name,
        tournament_id: data.tournament_id,
        logo: data.logo,
      };

      await this.models.Team.create(new_team)
        .then((success: any) => {
          resolve(success);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  public async update(id: string, data: any) {
    return new Promise(async (resolve, reject) => {
      const updated_team: any = {
        name: data.name,
        captain_id: data.name,
        tournament_id: data.tournament_id,
        logo: data.logo,
      };
      await this.models.Team.update(updated_team, { where: { id: id } })
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
      await this.models.Team.destroy({ where: { id: id } })
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
