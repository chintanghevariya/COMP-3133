const mongoose = require('mongoose');
require('mongoose-type-email');

var validationEmail = function(email) {
    var result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return result.test(email)
};

const listingSchema = new mongoose.Schema({
   
    listing_id: {
        type: String,
        required: true
    },

    listing_title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    street:{
        type: String,
        required: true
    },

    city: { 
        type:String,
        required: true
    },

    postal_code: { 
        type:String,
        required: true
    },

    price : {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate: [validationEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    username: {
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;