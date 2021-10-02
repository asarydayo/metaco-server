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
    modelName: "team_member",
    paranoid: false,
    freezeTableName: true,
    underscored: true,
    timestamps: true,
  }
);

export default TeamMember;
