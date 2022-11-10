require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
    
    mongoose.connect(process.env.MONGO_CONNECTION_URL,()=>{
        console.log("Database connected");
    });
}

module.exports=connectDB;