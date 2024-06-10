const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const { deleteUser, updateUser } = require("../controllers/userController");

module.exports = {
  createUser: async (body) => {
    try {
      body.password = await hash(body.password, 10);
      body.userID = uuid();
      const user = await userModel.createUser(body);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      delete user.response.dataValues.password;
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updateUser: async (body) => {
    try {
      const updateUser = await userModel.updateUser(body);
      if (updateUser.error || !updateUser.response[0]) {
        return {
          error: {
            message: "unable to update",
            error: updateUser?.error || updateUser.response,
          },
        };
      }
      return {
        message: "user deleted",
        response: updateUser.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await userModel.getAllUsers();
      if (users.error) {
        return {
          error: users.error,
        };
      }
      return {
        response: users.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: async (userID) => {
    try {
      const deleteUser = await userModel.deleteUser(userID);
      if (deleteUser.error || !deleteUser.response) {
        return {
          error: {
            message: "unable to delete",
            error: deleteUser?.error || deleteUser.response,
          },
        };
      }
      return {
        message: "user deleted",
        response: deleteUser.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
