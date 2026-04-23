import e from "express";
import mongoose from "mongoose";

const connectDb = async()=>{
const url = process.env.MONGO_URL;
if(!url){
  throw new Error("MONGO URI not defined");
}

try {
    await mongoose.connect(url,{
        dbName:"ChatAppMicroservice"
    })
    console.log("db connect sucessfully !");
} catch(error) {
      console.error("Faild to connect",error);
      process.exit(1);
}
}

export default connectDb;