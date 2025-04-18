//fixing cros manually***********************

const express =require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const routes=require('./Routes/index2');

const app=express();
// const port=5402;
const port=process.env.PORT;
const mongoURI = process.env.MONGO_URL;


// CORS issue will be solved //Manual cors issue fixing

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*') //http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')

    next();

});

//  //npm install cors
 app.use('/',routes);

 
    
// mongoose.connect('mongodb://127.0.0.1:27017/local', {
    mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(success => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });

}).catch(error => {
    console.log("❌ MongoDB Connection Error: " + error);
});


//run-oncrome localhost:5402
//http://localhost:5402/getRestaurantsByCity/pune
//http://localhost:5402/restaurants
//http://localhost:5402/restaurants/2
//data flow :: modules->controllers->rotes->app.js



//https://amazonapp-backend.onrender.com/amazon
//https://amazonapp-backend.onrender.com/amazon/1
//https://amazonapp-backend.onrender.com/getDataByType/clothes
//======================================================
