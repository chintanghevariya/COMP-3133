const mongoose = require('mongoose');
require('mongoose-type-email');

var validationEmail = function(email) {
    var result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return result.test(email)
};

var validatePassword = function(password) {
    var result = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return result.test(password)
}


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'username can not be empty'],
    },

    firstName: {
        type: String,
        required: [true,'first name can not be empty'],
    },
    lastName: {
        type: String,
        required: [true,'last name can not be empty'],
    },
    password: {
        type: String,
        required: true,
        validate: [validatePassword,'Please fill valid password'],
    },
    
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate: [validationEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    type: {
        type: String,
        required: [true,'Please enter a valid type,(Customer / Admin)'],
        enum: ['user', 'admin'],
        trim: true,
        lowercase: true
    }
});

const User = mongoose.model("User", userSchema); 
module.exports = User;
