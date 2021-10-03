"use strict";

/**
 * USER MIGRATION
 *
 *
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("team", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "The name of the team.",
      },
      captain_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "The Captain of this team.",
        references: {
          model: "user",
          key: "id",
        },
        onDelete: "restrict",
      },
      tournament_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "What tournamet this team is on.",
        references: {
          model: "tournament",
          key: "id",
        },
        onDelete: "restrict",
      },
      logo: {
        type: Sequelize.STRING(250),
        allowNull: true,
        comment: "The logo of the team.",
      },

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("team");
  },
};
