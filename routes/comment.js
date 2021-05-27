let route = require("express").Router();

let gurd = require("./gurd/admin");

let adminController = require("../controller/commentController");

let bodyParser = require("body-parser");

route.get("/admin/comment", gurd.admin, adminController.getComment);

route.get(
  "/admin/comment/editComment",
  gurd.admin,
  adminController.editComment
);
route.post(
  "/admin/comment/editComment/Edited",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  adminController.postEdit
);
route.get("/admin/comment/aproved", gurd.admin, adminController.aproveComment);
route.get(
  "/admin/comment/deleat",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  adminController.deleatComment
);
module.exports = route;
