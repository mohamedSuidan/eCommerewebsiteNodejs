let route = require("express").Router();

let orderController = require("../controller/orderController");

let gurd = require("./gurd/member");

let bodyParser = require("body-parser");

route.get("/order", gurd.gurdMember, orderController.getOrder);

route.get("/order/deleat", gurd.gurdMember, orderController.deletOrder)

module.exports = route;
