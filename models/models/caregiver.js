const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise
    
    // Define userSchema
    const userSchema = new Schema({
    
        userID: { type: Number, unique: true, required: true },
        role: {type: String, unique: false, required: true},
        firstname: { type: String, unique: false, required: true},
        lastname: {type: String, unique: false, required: true},
        fullname: {type: String, unique: false, required: true},
        email: {type: String, unique: true, required: true},
        mobile: {type: String, unique: true, required: true},
        landline: {type: String, unique: true, false},
        address: {type: String, unique: false, required},
        city: {type: String, unique: false, required},
        state: {type: String, unique: false, required},
        zip: {type: Number, unique: false, required},
        country: {type: String, unique: false, required},
        clientID: {type:Array, unique: false, required: true}
    
    })
    