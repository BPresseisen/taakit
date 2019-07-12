const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({
  Date: {type: Date},
  Shift: {type: String, required: true},
  userID:  { type: Number, required: true },
  patientName: {type: String, required: true},
  role: {type: Number, required: true},
  aideCaregiverID: {type:Number, required: true},
  aideCaregiverName: {type: String, required: true},
  task: {type: Array, required: true},
  taskScore: {type:Array, required:true},
  VitalScore: { type: Number, required: true },
  /// VITALS DETAIL???
  note: { type: String, required: false }
});

const Task = mongoose.model("Shift", ShiftSchema);

module.exports = Shift;