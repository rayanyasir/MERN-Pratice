const { models } = require("./index");

module.exports = {
  createTasks: async (body) => {
    try {
      console.log("body ->", body);
      const tasks = await models.tasks.create({ ...body });
      console.log("body ->", tasks);
      return {
        response: tasks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllTasks: async () => {
    try {
      const tasks = await models.tasks.findAll({
        // attributes:["password","userID"]    user to show the value which you want to show
        attributes: {
          exclude: ["deletedAt"],
        },
        include: [
          {
            model: models.users,
            attributes: ["userID"],
          },
        ],
      });
      //
      // const tasks = await models.tasks.findAll({
      //   attributes: {
      //     include: ["taskId", "title", "description", "createdAt", "updatedAt"],
      //     exclude: ["deletedAt", "userID", "password"],
      //   },
      //   include: [
      //     {
      //       model: models.users,
      //       attributes: ["userID", "userName"], // specify the attributes you want to include from the user model
      //     },
      //   ],
      // });

      // console.log(tasks);

      //

      console.log("tasks", tasks);
      return {
        response: tasks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
