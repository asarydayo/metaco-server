import { DataTypes } from "sequelize";
import sequelize from "database";

const Tournament = sequelize.define(
  "tournament",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "The name of the team.",
    },

    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "The starting date of the tournament.",
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "The starting date of the tournament.",
    },

    team_counts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      unique: false,
      comment: "Max number of team",
    },

    slot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      unique: false,
      comment: "Current available slot (?)",
    },

    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "tournament",
    paranoid: false,
    freezeTableName: true,
    underscored: true,
  }
);

export default Tournament;
