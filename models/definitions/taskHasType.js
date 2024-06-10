const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");
class taskHasType extends Model {}

taskHasType.init(
  {
    taskHasTypeId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
  },
  { timestamps: true, paranoid: true, tableName: "taskHasType", sequelize }
);

module.exports = taskHasType;
