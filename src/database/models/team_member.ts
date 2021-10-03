import { DataTypes } from "sequelize";
import sequelize from "database";

const TeamMember = sequelize.define(
  "team_member",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "the user",
      references: {
        model: "user",
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
    roles: {
      type: DataTypes.ENUM,
      values: ["CAPTAIN", "MEMBER", "STANDIN"],
      defaultValue: "STANDIN",
      comment: "the role",
    },
    ingame_id: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: false,
      comment: "Email used for logging in.",
    },

    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "team_member",
    paranoid: false,
    freezeTableName: true,
    underscored: true,
  }
);

export default TeamMember;
