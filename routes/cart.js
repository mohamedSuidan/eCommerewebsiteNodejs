let route = require("express").Router();

let cartController = require("../controller/cartController");

let gurd = require("./gurd/member");

let bodyParser = require("body-parser");

let expressValidator = require("express-validator").check;

route.get("/cart", gurd.gurdMember, cartController.getCart);

route.post(
  "/cart",
  gurd.gurdMember,
  bodyParser.urlencoded({ extended: true }),
  expressValidator("num").isEmpty().withMessage("Input Is Impty"),
  cartController.postCart
);

route.post(
  "/cart/edit",
  gurd.gurdMember,
  bodyParser.urlencoded({ extended: true }),
  cartController.editCart
);

route.post(
  "/cart/deleat",
  gurd.gurdMember,
  bodyParser.urlencoded({ extended: true }),
  cartController.deleatCart
);



module.exports = route;
