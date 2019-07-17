const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

	username: { type: String, unique: true, required: true },
	password: { type: String, unique: false, required: true },
	firstname: {type: String, unique: false, required:true},
	lastname: {type: String, unique: false, required:true},
	role: {type: String, unique: false, required:true}, 
	mobile: {type: String, unique: true, required:true},
	address: {type: String, unique: false, required:true},
	city: {type: String, unique: false, required:true},
	state: {type: String, unique: false, required:true},
	zip: {type: String, unique: false, required:true},
	country: {type: String, unique:false,required:true},
	clientID: {type: Array, unique: false, required: false}

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