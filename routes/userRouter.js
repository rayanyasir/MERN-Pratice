const route = require("express").Router();

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");
route.post("/createUser", createUser);
route.put("/updateUser", updateUser);
route.delete("/deleteUser", deleteUser);
route.get("/getUser", getUser);
route.get("/getAllUsers", getAllUsers);

module.exports = route;
