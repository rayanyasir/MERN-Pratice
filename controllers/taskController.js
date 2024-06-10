const joi = require("joi");
const taskService = require("../services/taskService");

const createSchema = joi.object().keys({
  title: joi.string().required(),
  description: joi.string(),
  userID: joi.string().length(36).required(),
});

module.exports = {
  createTasks: async (req, res) => {
    console.log("check");
    try {
      const validate = await createSchema.validateAsync(req.body);
      console.log("check", validate);
      const task = await taskService.createTasks(validate);
      if (task.error) {
        return res.send({
          error: task.error,
        });
      }
      return res.send({
        response: task.response,
      });
    } catch (error) {
      return res.send({
        message: error,
      });
    }
  },

  getAllTasks: async (req, res) => {
    try {
      const task = await taskService.getAllTasks();
      if (task.error) {
        return res.send({
          response: task.error,
        });
      }
      // console.log("express", task.response);
      return res.send({
        response: task.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
  // deleteUser: async (req, res) => {
  //   try {

  //   } catch (error) {
  //     return res.send({
  //       message: error.message,
  //     });
  //   }
  // }
};
