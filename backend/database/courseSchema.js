const mongoose = require("mongoose");
const subjectSchema = require("./subjectSchema");

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  subjects: [subjectSchema], // Array of subjects
});

// Use the model with a check to avoid OverwriteModelError
const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

module.exports = Course;
