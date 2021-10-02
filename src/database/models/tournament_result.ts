import { DataTypes } from "sequelize";
import sequelize from "database";

const TournamentResult = sequelize.define(
  "tournament_result",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tournament_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "the tournament",
      references: {
        model: "tournament",
        key: "id",
      },
      onDelete: "restrict",
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "the team",
      references: {
        model: "team",
        key: "id",
      },
      onDelete: "restrict",
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      unique: false,
      comment: "Current available slot (?)",
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      unique: false,
      comment: "Current available slot (?)",
    },
    created_at: {
      type: "TIMESTAMP",
      defaultValue: new Date(),
      allowNull: false,
      comment: "The date which the record was created.",
    },
    updated_at: {
      type: "TIMESTAMP",
      allowNull: true,
      comment: "The date which the record was last updated.",
    },
  },
  {
    modelName: "tournament_result",
    paranoid: false,
    freezeTableName: true,
    underscored: true,
    timestamps: true,
  }
);

export default TournamentResult;
