const authController = require("../controllers/authController");

const route=require("express").Router();
const{login,logout,resetPassword}=authController
route.get("/login",login)
route.get("/logout",logout)
route.get("/resetPassword",resetPassword)

module.exports=route
