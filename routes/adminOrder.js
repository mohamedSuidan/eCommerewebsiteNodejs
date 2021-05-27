let route = require("express").Router();

let gurd = require("./gurd/admin");

let orderController = require("../controller/orderAdminController");

let bodyParser = require("body-parser");

route.get("/admin/order", gurd.admin, orderController.getOrder);

route.get("/admin/order/send", gurd.admin, orderController.sendOrder);
route.get("/admin/order/done", gurd.admin, orderController.doneOrder);
module.exports = route;
