const mongoose = require('mongoose')

const GroupChatSchema = new mongoose.Schema({
    from_user:{
        type: String,
        required: [true, "Username can't be empty"],
        lowercase: true,
        true:true
    },

    room : {
        type: String,
        required: [true, "please select room"],
        lowercase: true,
        trim: true
    },

    messages: {
        type: String,
        required: true,
        trim: true
    },
    date_sent:{
        type: Date,
        default: Date.now
    }
})

const Group = mongoose.model("Group", GroupChatSchema);
module.exports = Group;