const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

	username: { type: String, unique: true, required: true },
	password: { type: String, unique: false, required: true }
	// firstname: { type: String, unique: false, required: true},
	// lastname: {type: String, unique: false, required: true},
	// fullname: {type: String, unique: false, required: true},
	// email: {type: String, unique: true, required: true},
	// mobile: {type: String, unique: true, required: true},
	// landline: {type: String, unique: true, required},
	// fk: {type: Array,unique: true, required: true},
	// jointW: {type: Number, required: true},
	// muscW: {type: Number, required: true},
	// nPainW: {type: Number, required: true},
	// oPainW: {type: Number, required: true},
	// appetiteW: {type: Number, required: true},
	// bodyT: {type: Number, required: true},
	// energyW: {type: Number, required: true},
	// sleepW:{type: Number, required: true},
	// fatigueW: {type: Number, required: true},
	// mobW: {type: Number, required: true},
	// balW: {type: Number, required: true},
	// breathW:{type: Number, required: true},
	// calmW:{type: Number, required: true},
	// tModW: {type: Number, required: true},
	// bowelsW: {type: Number, required: true},
	// giW: {type: Number, required: true}

})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User