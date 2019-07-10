const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  timeStamp: { type: Date, default: Date.now },
  shiftID: { type: Number, required: true },
  userID:  { type: Number, required: true },
  taskTypeID: { type: Number, required: true },
  score: { type: Number, required: true },
  note: { type: String, required: false }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;