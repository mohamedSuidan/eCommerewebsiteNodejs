let route = require("express").Router();

let memberController = require("../controller/memberController");

let gurd = require("./gurd/admin");

let bodyParser = require("body-parser");

route.get("/admin/member", gurd.admin, memberController.getMember);

route.get("/admin/member/addMember", gurd.admin, memberController.addMember);

route.post(
  "/admin/added",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  memberController.postAddMember
);
route.get("/admin/editMember", gurd.admin, memberController.memberEdit);

route.post(
  "/admin/updated",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  memberController.postEdit
);
route.get(
  "/admin/deleatMem",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  memberController.removeMember
);
route.get(
  "/admin/active",
  gurd.admin,
  bodyParser.urlencoded({ extended: true }),
  memberController.activeMember
);
module.exports = route;
