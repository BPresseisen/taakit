const mongoose = require("mongoose");
const Vital = mongoose.Schema;

const VitalSchema = new Schema({
  timeOut: { type: Date, default: Date.now },
  ShiftID:  { type: Number, required: true },

  //JOINT PAIN VITALS QUESTION
  jPain: {type: Boolean, required: false},
  //MUSCULAR PAIN VITALS QUESTION
  mPain: {type: Boolean, required: false},
  //NERVE PAIN VITALS QUESTION
  nPain: {type: Boolean, required: false},
  //GASTRO PAIN VITALS QUESTION
  gPain: {type: Boolean, required: false},
  //APPETITE VITALS QUESTION
  appetite: {type: Boolean, required: false},
  //BODY TEMPERATURE VITALS QUESTION
  bTemp: {type: Boolean, required: false},
  //ENERGY VITALS QUESTION
  vigor: {type: Boolean, required: false},
  //SLEEP QUALITY VITALS QUESTION
  sleepQual: {type: Boolean, required: false},
  //FATIGUE-SLEEPINESS VITALS QUESTION
  fatigue: {type: Boolean, required: false},
  //MOBILITY VITALS QUESTION
  mobility: {type: Boolean, required: false},
  //BALANCE VITALS QUESTION
  balance: {type: Boolean, required: false},
  //BREATHING QUALITY
  shortBreath:{type: Boolean, required: false},
  //CALMNESS-MOOD
  moodiness:{type: Boolean, required: false},
  //TECH MODALITY VITALS QUESTION
  calmness: {type: Boolean, required: false},
  //LOQUACITY VITALS QUESTION
  loquacity: {type: Boolean, required: false},
  //RESTLESSNESS VITALS QUESTION
  restlessness: {type: Boolean, required: false},
  //IMPATIENCE VITALS QUESTION
  impatience: {type: Boolean, required: false},
  //HYPERMOTILITY VITALS QUESTION
  hypermotility: {type: Boolean, required: false},
  //CONTINENCE VITALS QUESTION--Regular or Constipated
  bowels: {type: Boolean, required: false},
  //CONSTIPATION VITALS QUESTION--Regular or Constipated
  constipation: {type: Boolean, required: false},
  //HYPERTONICITY VITALS QUESTION
  hypertonicity: {type: Boolean, required: false},
  //JITTERINESS VITALS QUESTION
  jitteriness: {type: Boolean, required: false},
  //SOCIALIZATION VITALS QUESTION
  socialization: {type: Boolean, required: false},
  //VITAL SCORE
  vitalScore: {type: Boolean, required: false},
  //MEMO
  memo: { type: String, required: false }

  
});

const Vital = mongoose.model("Vital", VitalSchema);

module.exports = Vital;