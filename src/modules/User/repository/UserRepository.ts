import { IController } from "common/controller/baseController";
import { Op } from "sequelize";

export default class TeamRepository implements IController {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  public async getAll(req?: any) {
    const query: any = {
      where: {
        [Op.or]: {
          name: {
            [Op.like]: `%${req.search}%`,
          },
        },
      },
      order: [["coin", "DESC"]],
    };

    if (req.paginated) {
      query.limit = req.per_page;
      query.offset = req.per_page * req.page - req.per_page;
    }

    return await this.models.User.findAll(query);
  }

  public async getOneByID(id: string, req: any = {}) {
    return new Promise(async (resolve, reject) => {
      const query: any = {
        include: [],
        where: { id: id },
      };

      if (req.with_data) {
        query.include.push({
          model: this.models.TeamMember,
          as: "membership",
          // required: true,
          include: [
            {
              model: this.models.User,
              as: "person",
              // required: true,
            },
            {
              model: this.models.Team,
              as: "team",
              // required: true,
              include: [
                {
                  model: this.models.TournamentResult,
                  as: "results",
                  include: [
                    {
                      model: this.models.Tournament,
                      as: "tournament",
                      // required: true,
                    },
                  ],
                  // required: true,
                },
              ],
            },
          ],
        });
      }

      await this.models.User.findOne(query)
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

      await this.models.User.findOne(query)
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
      const new_user: any = {
        name: data.name,
        email: data.email,
        coin: data.coin,
        picture: data.picture,
      };

      await this.models.User.create(new_user)
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
      const updated_user: any = {
        name: data.name,
        email: data.email,
        coin: data.coin,
        picture: data.picture,
      };
      await this.models.User.update(updated_user, { where: { id: id } })
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
      await this.models.User.destroy({ where: { id: id } })
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

  public async updateCoins(id: string, data: any) {
    return new Promise(async (resolve, reject) => {
      var user: any = await this.getOneByID(id);
      const updated_user: any = {
        name: user.name,
        email: user.email,
        picture: user.picture,
        coin: user.coin + data,
      };

      return resolve(this.update(id, updated_user));
    });
  }
}
