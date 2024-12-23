const courseSchema = require("../../database/courseSchema");

async function getAll() {
  var coursesAll = await courseSchema.find({});
  
  return coursesAll;
}

module.exports = {
    getAll
}