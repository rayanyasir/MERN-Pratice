const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const { deleteUser, updateUser } = require("../controllers/userController");
const { createUser } = require("./userService");
const taskModel = require("../models/taskModel");

module.exports = {
  createTasks: async (body) => {
    try {
      body.taskId = uuid();
      const task = await taskModel.createTasks(body);
      if (task.error) {
        return {
          error: task.error,
        };
      }
      delete task.response.dataValues.password;
      return {
        response: task,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllTasks: async () => {
    try {
      const task = await taskModel.getAllTasks();
      if (task.error) {
        return {
          error: task.error,
        };
      }
      return {
        response: task.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
