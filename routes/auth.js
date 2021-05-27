let route = require("express").Router();

let authController = require("../controller/authController");

let bodyParser = require("body-parser");

let expressValidator = require("express-validator").check;

route.get("/admin/sginIn", authController.sginIn);

route.post(
  "/admin",
  bodyParser.urlencoded({ extended: true }),
  authController.sginInPost
);
route.get("/admin/sginOut", authController.sginOut);

module.exports = route;
