import { Sequelize } from "sequelize";
import config from "config/config";

let sequelize: any;

switch (config.database_environment.dialect) {
  case "sqlite":
    sequelize = new Sequelize({
      dialect: config.database_environment.dialect,
      storage: config.database_environment.database,
      logging: false,
    });

    break;
  case "mysql":
    sequelize = new Sequelize(
      config.database_environment.database,
      config.database_environment.username,
      config.database_environment.password,
      {
        //@ts-ignore
        dialect: config.database_environment.dialect,
        host: config.database_environment.host,
        logging: false,
        // logging: (message) => logging.info("DATABASE", message),

        pool: {
          max: 5,
          min: 0,
          acquire: 10000000,
          idle: 10000000,
        },
      }
    );
    break;

  default:
    break;
}

// module.exports = sequelize;
export default sequelize;
