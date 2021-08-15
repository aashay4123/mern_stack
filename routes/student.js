const express = require("express");
const router = express.Router();
const factory = require("../controller/handlerFactory");
const Student = require("../Model/student");

router.route("/").get(factory.getAll(Student)).post(factory.createOne(Student));

router
  .route("/:id")
  .get(factory.getOne(Student))
  .patch(factory.updateOne(Student))
  .delete(factory.deleteOne(Student));
module.exports = router;
