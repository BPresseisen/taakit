const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({
  Date: {type: Date},
  userID:  { type: Number, required: true },
  clientID: {type: Number, required: true},
  clientName: {type: String, required},
  note: { type: String, required: false }
});

const Shift = mongoose.model("Shift", ShiftSchema);

module.exports = Shift;