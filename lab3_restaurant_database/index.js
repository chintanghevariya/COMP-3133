//101236361
//chintan ghevariya

const mongoose = require('mongoose');
const express = require('express')
const restaurantRouter = require('./routes/restaurantRoutes.js');

const app = express()
app.use(express.json())

mongoose.connect(`mongodb+srv://chintan:ghevariya@comp3123.xcrku.mongodb.net/restaurant`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Successfully connected to Mongodb')
}).catch(err => {
    console.log('Error from Mongodb connection' + err.message)
});

app.use(restaurantRouter);

app.listen(port=3000, () => { console.log(`Server is running at port : ${port}`) });