require("dotenv").config();

const {
  DATABASE_PORT,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASS,
  DATABASE_NAME,
  DATABASE_TYPE,

  DATABASE_PORT_TEST,
  DATABASE_HOST_TEST,
  DATABASE_USER_TEST,
  DATABASE_PASS_TEST,
  DATABASE_NAME_TEST,
  DATABASE_TYPE_TEST,

  DATABASE_PORT_DEV,
  DATABASE_HOST_DEV,
  DATABASE_USER_DEV,
  DATABASE_PASS_DEV,
  DATABASE_NAME_DEV,
  DATABASE_TYPE_DEV,
} = process.env;

const databaseCredentials = {
  DEVELOPMENT: {
    dialect: "sqlite",
    storage: "src/database/database_dev.sqlite3",
  },
  TEST: {
    dialect: "sqlite",
    storage: ":memory",
  },
  PRODUCTION: {
    dialect: "sqlite",
    storage: "src/database/database_production.sqlite3",
  },
};

module.exports = databaseCredentials;
