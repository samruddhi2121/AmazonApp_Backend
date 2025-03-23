//fixing cros manually***********************

const express =require('express');

const routes=require('./Routes/index2');

const app=express();
const port=5402;


// CORS issue will be solved //Manual cors issue fixing

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*') //http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')

    next();

});

//  //npm install cors
 app.use('/',routes);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});

//run-oncrome localhost:5402
//http://localhost:5402/getRestaurantsByCity/pune
//http://localhost:5402/restaurants
//http://localhost:5402/restaurants/2
//data flow :: modules->controllers->rotes->app.js
//======================================================
