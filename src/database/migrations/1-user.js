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

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user");
  },
};
