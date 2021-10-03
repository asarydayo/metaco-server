"use strict";

/**
 * USER MIGRATION
 *
 *
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("team_member", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "the user",
        references: {
          model: "user",
          key: "id",
        },
        onDelete: "restrict",
      },
      team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "the team",
        references: {
          model: "team",
          key: "id",
        },
        onDelete: "restrict",
      },
      roles: {
        type: Sequelize.ENUM,
        values: ["CAPTAIN", "MEMBER", "STANDIN"],
        defaultValue: "STANDIN",
        comment: "the role",
      },
      ingame_id: {
        type: Sequelize.STRING(250),
        allowNull: false,
        unique: false,
        comment: "Email used for logging in.",
      },

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("team_member");
  },
};
