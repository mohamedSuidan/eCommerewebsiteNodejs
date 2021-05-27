let route = require("express").Router();

let bodyParser = require("body-parser");

let gurd = require("../routes/gurd/admin");

let catogaryController = require("../controller/catogaryController");
const { catogryEdit } = require("../model/catogaryModel");

route.get("/admin/catogary", gurd.admin, catogaryController.getCatogary);
route.get(
  "/admin/catogary/addCatogry",
  gurd.admin,
  catogaryController.getAddCatogry
);
route.post(
  "/admin/catogary/catogaryAdded",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  catogaryController.postAddCatogry
);
route.get(
  "/admin/catogary/catoEdit",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  catogaryController.editCatogry
);
route.post(
  "/admin/catogary/completedEdit",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  catogaryController.postEditCatogry
);
route.post(
  "/admin/catogary/deletCatogry",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  catogaryController.postRemoveCatogry
);
module.exports = route;
