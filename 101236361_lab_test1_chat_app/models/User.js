const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, "Username can't be empty"],
        trim: true,
        lowercase: true
    },
    firstname:{
        type: String,
        required: [true, "Firstname can't be empty"],
        lowercase: true,
        trim: true
    },
    lastname:{
        type: String,
        required: [true, "Lastname can't be empty"],
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: [true, "Password can't be empty"],
        lowercase: true,
        trim: true
    },
    created:{
        type: Date,
        default: Date.now,
        alias : 'creatOn'
    }
})

const User = mongoose.model('User',UserSchema);
module.exports = User;