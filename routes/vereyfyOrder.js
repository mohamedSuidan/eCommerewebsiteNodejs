let route = require("express").Router();

let orderController = require("../controller/verfyController");

let gurd = require("./gurd/member");

let bodyParser = require("body-parser");

route.get(
  "/vereyfy-order",
  gurd.gurdMember,
  bodyParser.urlencoded({ extended: true }),
  orderController.getOrder
);

route.post(
  "/vereyfy-order/order",
  gurd.gurdMember,
  bodyParser.urlencoded({ extended: true }),
  orderController.postOrder
);
module.exports = route;
