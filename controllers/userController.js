const joi = require("joi");
const userService = require("../services/userService");
const createSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(1).max(34).required(),
});

const deleteSchema = joi.object().keys({
  userId: joi.string().required(),
});
const updateSchema = joi.object().keys({
  userID: joi.string().length(36).required(),
  userName: joi.string().min(3).max(34).required(),
});
module.exports = {
  createUser: async (req, res) => {
    // console.log("check")
    try {
      const validate = await createSchema.validateAsync(req.body);
      // console.log("check",req.query)
      const user = await userService.createUser(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        message: error,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const validate = await updateSchema.validateAsync(req.body);
      const user = await userService.updateUser(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        message: "update user api",
        response: user.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteSchema.validateAsync(req.query);
      const deleteUser = await userService.deleteUser(validate.userId);
      if (deleteUser.error) {
        return res.send({
          error: deleteUser.error,
        });
      }
      console.log("delete", deleteUser.response);
      return res.send({
        message: "delete user api",
        response: deleteUser.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getUser: (req, res) => {
    return res.send({
      message: "get user api",
      data: req.query,
    });
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      if (users.error) {
        return res.send({
          response: users.error,
        });
      }
      return res.send({
        response: users.response,
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
