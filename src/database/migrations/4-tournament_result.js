"use strict";

/**
 * USER MIGRATION
 *
 *
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("tournament_result", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tournament_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "the tournament",
        references: {
          model: "tournament",
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
      point: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        unique: false,
        comment: "Current available slot (?)",
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        unique: false,
        comment: "Current available slot (?)",
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
    await queryInterface.dropTable("tournament_result");
  },
};
