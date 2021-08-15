const express = require("express");
const router = express.Router();
const factory = require("../controller/handlerFactory");
const Course = require("../Model/course");

router.route("/").get(factory.getAll(Course)).post(factory.createOne(Course));

router
  .route("/:id")
  .get(factory.getOne(Course))
  .patch(factory.updateOne(Course))
  .delete(factory.deleteOne(Course));
module.exports = router;
