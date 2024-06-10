const { models } = require("./index");
const { deleteUser } = require("../controllers/userController");
const { updateUser } = require("../services/userService");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updateUser: async ({ userID, ...body }) => {
    try {
      const user = await models.users.update(
        { ...body },
        {
          where: {
            userID: userID,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await models.users.findAll({
        // attributes:["password","userID"]    user to show the value which you want to show
        attributes: {
          exclude: ["password"],
        },
        paranoid: false,
      });

      console.log("users", users);
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: async (userID) => {
    try {
      const deleteUser = await models.users.destroy({
        where: {
          userID: userID,
        },
      });
      return {
        response: deleteUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
