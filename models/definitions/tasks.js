const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");
const users = require("./user");
class tasks extends Model {}

tasks.init(
  {
    taskId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.STRING(1000),
    },
    userID: {
      allowNull: false,
      type: DataTypes.STRING(255),
      references: {
        models: users,
        key: "userID",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "tasks",
    sequelize,
  }
);

module.exports = tasks;
