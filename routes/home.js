let route = require("express").Router();

let homeController = require("../controller/homeController");

let bodyParser = require("body-parser");

let gurd = require("../routes/gurd/admin");

route.get("/", homeController.getHome);

module.exports = route;
