const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");

class userHasType extends Model {}

userHasType.init(
  {
    userHasTypeId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
  },
  { timestamps: true, paranoid: true, tableName: "userHasType", sequelize }
);

module.exports = userHasType;
