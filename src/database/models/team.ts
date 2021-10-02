import { DataTypes } from "sequelize";
import sequelize from "database";

const Team = sequelize.define(
  "team",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "The name of the team.",
    },
    captain_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "The Captain of this team.",
      references: {
        model: "user",
        key: "id",
      },
      onDelete: "restrict",
    },
    tournament_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "What tournamet this team is on.",
      references: {
        model: "tournament",
        key: "id",
      },
      onDelete: "restrict",
    },
    logo: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "The logo of the team.",
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
    modelName: "team",
    paranoid: false,
    freezeTableName: true,
    underscored: true,
    timestamps: true,
  }
);

export default Team;
