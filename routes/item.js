let route = require("express").Router();

let bodyParser = require("body-parser");

let gurd = require("./gurd/admin");

let itemController = require("../controller/itemController");

let multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "img");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let upload = multer({ storage: storage });

route.get("/admin/item", gurd.admin, itemController.getItem);

route.get("/admin/item/addItem", gurd.admin, itemController.getAddItem);

route.post(
  "/admin/item/theAdd",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  upload.single("myFile"),
  itemController.postAddedItem
);

route.get("/admin/item/editItem", gurd.admin, itemController.editItem);

route.post(
  "/admin/item/editItem/edited",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  upload.single("myFile"),
  itemController.postEdit
);
route.get("/admin/item/deleted", gurd.admin, itemController.deletItem);
route.get("/admin/item/aprove", gurd.admin, itemController.aproveItem)
module.exports = route;
