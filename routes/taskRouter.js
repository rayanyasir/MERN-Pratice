const route = require("express").Router();

const { getAllTasks, createTasks } = require("../controllers/taskController");

route.post("/createTasks", createTasks);
route.get("/getAllTasks", getAllTasks);

module.exports = route;
