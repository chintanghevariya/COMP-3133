const mongoose = require('mongoose')

const PersonalChatSchema = new mongoose.Schema({
    from_user:{
        type: String,
        required: [true, "Username can't be empty"],
        lowercase: true,
        trim:true
    },

    to_user : {
        type: String,
        required: [true, "to user can't be empty'"],
        trim:true,
        lowercase: true
    },

    messages: {
        type: String,
        required: [true,"msg can't be empty"],
        trim: true
    },
    date_sent:{
        type: Date,
        default: Date.now
    }
})

const PersonalChat = mongoose.model("personalChat", PersonalChatSchema);
module.exports = PersonalChat;