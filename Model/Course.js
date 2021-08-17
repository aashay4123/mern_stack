const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  credits: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
