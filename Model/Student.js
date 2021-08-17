const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  program: {
    type: String,
    required: true,
    trim: true,
  },

  mobileNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  courseId: [{ type: mongoose.Schema.ObjectId, ref: "Course" }],
});

StudentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "courseId",
    select: "-__v -createdAt -updatedAt",
  });

  next();
});

module.exports = mongoose.model("Student", StudentSchema);
