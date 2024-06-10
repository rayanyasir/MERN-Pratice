const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");

class users extends Model {}
users.init(
  {
    userID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    userName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "users",
    sequelize,
  }
);
module.exports = users;
