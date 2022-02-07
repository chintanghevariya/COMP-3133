const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    address:{
        building: {
            type: Number,
            trim: true
        },
        street: {
            type: String,
            required: true,
            trim: true
        },
        zipcode: {
            type: Number,
            trim: true
        }
    },
    city: {
        type: String,
        required: [true,'Enter your city'],
        trim: true 
    },
    cuisine: {
        type: String,
        required: [true, 'Enter cuisine'],
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Enter name..'],
        trim: true
    },
    restaurant_id:{
        type:Number,
        required:true,
        trim:true
    }

})
const Restaurants = mongoose.model("Restaurants", restaurantSchema);
module.exports = Restaurants;
