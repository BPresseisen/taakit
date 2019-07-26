const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  timeStamp: { type: Date, default: Date.now },
  shiftID: { type: Number, required: true },
  clientID: {type: Number, required: true},
  clientName: {type:String, required: true},
  taskName: { type: Number, required: true },
  score: { type: Number, required: true }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;