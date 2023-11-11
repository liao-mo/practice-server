const mongoose = require("mongoose");

// Define the Task schema
const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true, // Remove leading and trailing whitespaces
    },
    completed: {
      type: Boolean,
      default: false, // Default value is false (task is not completed)
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Create the Task model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
