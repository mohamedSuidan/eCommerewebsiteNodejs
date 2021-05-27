let route = require("express").Router();

let authController = require("../controller/forntAuthController");

let gurd = require("./gurd/member");

let bodyParser = require("body-parser");

let multer = require("multer");

let flash = require("connect-flash");

let expressValidat = require("express-validator").check;

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "img");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let upload = multer({ storage: storage });

route.get("/sgin-in", authController.getSginUp);
route.get("/sgin-up", authController.getSginIn);

route.post(
  "/sgin-in",
  bodyParser.urlencoded({ extended: true }),
  upload.single("avtar"),
  expressValidat("name").not().isEmpty().withMessage("Is Input Empty"),
  expressValidat("email")
    .notEmpty()
    .withMessage("Write Your Email")
    .isEmail()
    .withMessage("Email Not Susscs"),
  expressValidat("password")
    .isLength({ min: 6 })
    .withMessage("Must Be Curucter Biger Than 6"),
  expressValidat("password2").custom((value, { req }) => {
    if (req.body.password === value) {
      return true;
    } else {
      
    }
  }).withMessage("Password Not Equal Password 2"),
  authController.postSignUp
);

route.post(
  "/sgin-up",
  bodyParser.urlencoded({ extended: true }),
  authController.postSginIn
);

route.get("/edit-profile", gurd.gurdMember, authController.editProfile);
route.post(
  "/edit-profile/edited",
  bodyParser.urlencoded({ extended: true }),
  upload.single("avtar"),
  authController.postEditProfile
);
route.get("/profile", gurd.gurdMember, authController.profile);

route.get("/sgin-out", gurd.gurdMember, authController.sginOut);
module.exports = route;
