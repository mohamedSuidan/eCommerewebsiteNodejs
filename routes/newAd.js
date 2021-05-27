let route = require("express").Router();

let adController = require("../controller/adController");

let gurd = require("./gurd/member");

let bodyParser = require("body-parser");
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
route.get("/new-ad", gurd.gurdMember, adController.getAd);

route.post(
  "/new-ad/added",
  gurd.gurdMember,
  bodyParser.urlencoded({ extended: true }),
  upload.single("myFile"),
  adController.addAds
);
module.exports = route;
