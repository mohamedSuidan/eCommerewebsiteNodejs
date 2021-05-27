let route = require("express").Router();

let gurd = require("./gurd/member");

let tagController = require("../controller/tagController");

let bodyParser = require("body-parser");

let gurddd = require("./gurd/member");


route.get("/tag", gurddd.gurdMember,tagController.getTag);

module.exports = route;
