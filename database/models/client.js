const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const clientSchema = new Schema({

	firstname: { type: String, unique: false, required: false},
    lastname: {type: String, unique: false, required: false},
    fullname: {type: String, unique: false, required: true},
	email: {type: String, unique: true, required: false},
	mobile: {type: String, unique: true, required: false},
    address: {type: String, unique: false, required: false},
    city: {type: String, unique: false, required: false},
    state: {type: String, unique: false, required:false},
    zip: {type: Number, unique: false, required: false},
    country: {type: String, unique: false, required: false},
    userID: {type:Number, unique: false, required: false},
    // jointW: {type: Number, required: true}
	// muscW: {type: Number, required: true},
	// nPainW: {type: Number, required: true},
	// gPainW: {type: Number, required: true},
	// appetiteW: {type: Number, required: true},
	// bodyTempW: {type: Number, required: true},
	// vigorW: {type: Number, required: true},
	// sleepW:{type: Number, required: true},
	// fatigueW: {type: Number, required: true},
	// mobW: {type: Number, required: true},
	// balW: {type: Number, required: true},
    // shortBW:{type: Number, required: true},
    // moodW: {type: Number, required: true},
	// calmW:{type: Number, required: true},
	// loqW: {type: Number, required: true},
	// restlessW: {type: Number, required: true},
    // impatW: {type: Number, required: true},
    // hypermotilW: {type: Number, required: true},
    // continW: {type: Number, required: true},
    // constipW: {type: Number, required: true},
    // constipW: {type: Number, required: true},
    // hypertonW: {type: Number, required: true},
    // jitterW: {type: Number, required: true},
    // socialW: {type: Number, required: true}

})

const Client = mongoose.model('Client', clientSchema)
module.exports = Client