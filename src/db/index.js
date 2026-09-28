const mongoose=require("mongoose");
const DB_NAME=require("../constants")
require("dotenv").config()


const connectDB= async()=>{
    try{
       const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`MongoDB connected ! DB host: ${connectionInstance.connection.host}`)
       
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports =connectDB