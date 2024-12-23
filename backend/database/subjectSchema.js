const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["media", "youtube", "article"], required: true },
  media: { fileUrl: String },
  youtubeLink: { type: String },
  articleLink: { type: String },
  chapter: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  resources: [resourceSchema],
});

// Export the schema (not the model)
module.exports = subjectSchema;
