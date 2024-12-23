// Define Subject Schema
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  resources: [resourceSchema], // Array of resources
});
