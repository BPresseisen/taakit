const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise

const ShiftSchema = new Schema({
  Date: {type: Date},
  clientID: {type: Number, required: true},
  clientName: {type: String, required},
  task: { type: String, required: false }
});

const Shift = mongoose.model("Shift", ShiftSchema);
module.exports = Shift