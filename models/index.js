const sequelize = require("../bin/dbConnection");

const users = require("./definitions/user");
const tasks = require("./definitions/tasks");
const taskHasType = require("./definitions/taskHasType");
const userHasTask = require("./definitions/userHasTask");
const sessions = require("./definitions/sessions");

const models = { users, tasks, userHasTask, taskHasType, sessions };

// relation
users.hasMany(tasks, {
  foreignKey: "userID",
});
tasks.belongsTo(users, {
  foreignKey: "userID",
});

users.hasOne(sessions, {
  foreignKey: "userID",
});
sessions.belongsTo(users, {
  foreignKey: "userID",
});
const db = {};
db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
