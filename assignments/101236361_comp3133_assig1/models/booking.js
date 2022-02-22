const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   
    booking_id : { type: String, required:true},

    listing_id : { type: String, required:true},
    
    booking_date: { type: String, required: true},

    booking_start: { type: String, required:true },

    booking_end: { type: String, required:true},

    username: { type: String, required:true, unique: true,}
});


const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
