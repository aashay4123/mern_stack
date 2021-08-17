const AppError = require("../utils/appError");
const { ObjectId } = require("mongoose").Types;
const {
  catchAsync,
  filterObj,
  addArrayNum,
  addArrayProject,
} = require("../utils/utils");

const updateHelper = (doc, req) => {
  const filteredBody = filterObj(
    req.body,
    "name",
    "program",
    "email",
    "mobileNumber",
    "age",
    "credits",
  );

  Object.keys(filteredBody).forEach((el) => (doc[el] = filteredBody[el]));

  if (req.body.courseId) {
    const unique = addArrayNum(req.body.courseId);
    doc.courseId = unique;
  }
  if (req.body.isPrivate) {
    doc.isPrivate = Boolean(req.body.isPrivate);
  }

  console.log("handler factory", doc, "\n body", req.body);
  return doc;
};

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    console.log(doc, req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    document = updateHelper(doc, req);
    if (!document)
      return next(new AppError("could not udpate the database", 407));

    const finaldoc = await document.save();

    res.status(200).json({
      status: "success",
      data: {
        data: finaldoc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let data = {};

    document = updateHelper(data, req);
    const doc = await Model.create(document);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let filter = { _id: req.params.id };

    if (req.baseUrl === "/api/reviews")
      if (req.user.role !== "admin")
        filter = { _id: req.params.id, isApproved: true };

    let query = Model.find(filter);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    console.log("object");
    const doc = await Model.find({});
    console.log("object", doc);

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
