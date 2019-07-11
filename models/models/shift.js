const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({
  timeOut: { type: Date, default: Date.now },
  userID:  { type: Number, required: true },
  
  //MEMORY VITALS QUESTION
  //-->PRIOR DAY SCHEDULE
  //pMemory: {type: Number, required: false},
  //-->CURRENT DAY SCHEDULE
  //-->NEXT DAY SCHEDULE
  //-->OTHER MEMORY QUESTIONS

  //JOINT PAIN VITALS QUESTION
  // jPain: {type: Number, required: false},
  // //MUSCULAR PAIN VITALS QUESTION
  // mPain: {type: Number, required: false},
  // //OTHER PAIN (SWELLING) VITALS QUESTION
  // oPain: {type: Number, required: false},
  // //APPETITE VITALS QUESTION
  // appetite: {type: Number, required: false},
  // //ENERGY VITALS QUESTION
  // energy: {type: Number, required: false},
  // //SLEEP QUALITY VITALS QUESTION
  // sleepQual: {type: Number, required: false},
  // //FATIGUE-SLEEPINESS VITALS QUESTION
  // fatigue: {type: Number, required: false},
  // //MOBILITY VITALS QUESTION
  // mobility: {type: Number, required: false},
  // //BALANCE VITALS QUESTION
  // balance: {type: Number, required: false},
  // //BREATHING QUALITY
  // breathQual:{type: Number, required: false},
  // //CALMNESS-MOOD
  // calmMood:{type: Number, required: false},
  // //TECH MODALITY VITALS QUESTION
  // tModality: {type: Number, required: false},
  // //CONTINENCE VITALS QUESTION--Regular or Constipated
  // bowels: {type: Number, required: false},
  // //GASTROINTESTINAL VITALS QUESTION
  // gastro: {type: Number, required: false},
  // //VITALS COMPOSITE SCORE
  // vitalsScore: {type: Number, required: false},
  // //MEMO
  // memo: { type: String, required: false }

  
});

const Task = mongoose.model("Task", ShiftSchema);

module.exports = Task;