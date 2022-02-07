const express = require('express');
const restaurantModel = require('../model/restaurants');
const app = express();


//REST API to return all restaurant details
app.get('/restaurants',async(req,res)=>{
    const restaurants = await restaurantModel.find({});
    try{
        res.status(200).send(restaurants);
    }
    catch(err){
        res.status(500).send(err);
    }
})

//REST API to return all restaurant details by cuisine
app.get('/restaurants/cuisine/:name', async (req, res) => {
    const restaurants = await restaurantModel.find({cuisine:req.params.name});
    try {
        res.status(200).send(restaurants);
    }
    catch (err) {
        res.status(500).send(err);
    }
})


// REST API to return the
// The selected columns must include id, cuisines, name, city, resturant_id
// The sorting by the restaurant_id in Ascending or Descending Order based on parameter passed.

app.get('/restaurants/sort',async(req,res)=>{
    try {
    const restaurants = await restaurantModel.find({}) 
                                .select('_id cuisine name city restaurant_id')
                                .sort({'restaurant_id': req.query.sortBy})
    res.status(200).send(restaurants);
    }
    catch (err) {
        res.status(500).send(err);
    }
})

//Create REST API to return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
//The selected columns must include cuisines, name and city, but exclude id
//The sorting order must be Ascending Order on the name

app.get('/restaurants/Delicatessen',async(req,res)=>{
    try {
    const restaurants = restaurantModel.
                                find({ 'city': { $ne: 'Brooklyn'}})
                                .where('cuisine').equals('Delicatessen')
                                .select('cuisine name city')
                                .sort('name')
                                .exec((err, data) => {
                                    if (err) {
                                        res.send(JSON.stringify({ status: false, message: "No data found" }));
                                    } else {
                                        res.send(data);
                                    }
                                });
    }
    catch (err) {
        res.status(500).send(err);
    }
})


module.exports = app