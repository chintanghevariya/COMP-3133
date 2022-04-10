const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   
    booking_id : { 
        type: String, 
        required:true,
        
    },

    listing_id : { type: String, required:true},
    
    booking_date: { type: Date, required: true},

    booking_start: { type: Date, required:true },

    booking_end: { type: Date, required:true},

    username: { type: String, required:true}
});


const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
