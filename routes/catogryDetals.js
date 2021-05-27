let route = require("express").Router();

let gurd = require("./gurd/member");

let itemController = require("../controller/itemDetelasController");

let bodyParser = require("body-parser");

route.get("/catogry", gurd.gurdMember, itemController.getItem);

route.post(
  "/catogry/addeds",
  gurd.gurdMember,
  bodyParser.urlencoded({ extended: true }),
  itemController.postComment
);

module.exports = route;
