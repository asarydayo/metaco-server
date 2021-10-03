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

    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "team",
    paranoid: false,
    freezeTableName: true,
    underscored: true,
  }
);

export default Team;
