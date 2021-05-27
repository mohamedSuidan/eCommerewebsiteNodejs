let route = require("express").Router();

let gurd = require("./gurd/admin");

let adminController = require("../controller/adminController");

let bodyParser = require("body-parser");

route.get(
  "/admin",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  adminController.getAdmin
);

route.get("/admin/edit", gurd.admin, adminController.editAdmin);
route.post(
  "/admin/edit",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  adminController.postEditAdmin
);


module.exports = route;
