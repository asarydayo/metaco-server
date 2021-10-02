"use strict";

/**
 * USER MIGRATION
 *
 *
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "The name of the user.",
      },
      email: {
        type: Sequelize.STRING(250),
        allowNull: false,
        unique: false,
        comment: "Email used for logging in.",
      },
      coin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        unique: false,
        comment: "User coins",
      },
      picture: {
        type: Sequelize.STRING(250),
        allowNull: false,
        defaultValue: 0,
        unique: false,
        comment: "The user image",
      },

      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        comment: "The date which the record was created.",
      },
      updated_at: {
        type: "TIMESTAMP",
        allowNull: true,
        comment: "The date which the record was last updated.",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user");
  },
};
