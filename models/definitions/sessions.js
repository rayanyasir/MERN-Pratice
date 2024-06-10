const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");
const users = require("./user");
class sessions extends Model {}

sessions.init(
  {
    sessionsID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    token: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },

    userID: {
      allowNull: false,
      type: DataTypes.STRING(255),
      references: {
        model: users,
        key: "userID",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "sessions",
    sequelize,
  }
);

module.exports = sessions;
