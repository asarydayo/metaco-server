import { DataTypes } from "sequelize";
import sequelize from "database";

const User = sequelize.define(
  "user",
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
      comment: "The name of the user.",
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: false,
      comment: "Email used for logging in.",
    },
    coin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      unique: false,
      comment: "User coins",
    },
    picture: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: 0,
      unique: false,
      comment: "The user image",
    },

    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "user",
    paranoid: false,
    freezeTableName: true,
    underscored: true,
  }
);

export default User;
