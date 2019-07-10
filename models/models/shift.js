const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({
  timeOut: { type: Date, default: Date.now },
  userID:  { type: Number, required: true },
  
  memo: { type: String, required: false }
});

const Task = mongoose.model("Task", ShiftSchema);

module.exports = Task;