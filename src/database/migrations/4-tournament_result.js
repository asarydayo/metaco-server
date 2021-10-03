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

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tournament_result");
  },
};
