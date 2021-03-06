"use strict";

/**
 * USER MIGRATION
 *
 *
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("tournament", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "The name of the team.",
      },

      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: "The starting date of the tournament.",
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: "The starting date of the tournament.",
      },

      team_counts: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        unique: false,
        comment: "Max number of team",
      },

      slot: {
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
    await queryInterface.dropTable("tournament");
  },
};
