import mongoose, { connect } from "mongoose";

import { DB_NAME } from "./constant.js";

const connectDB = async()=>{
     try {

        const connectionInstance=await mongoose.connect(`${process.env.URI}/${DB_NAME}`);

        console.log(`\ndatabse connected ${connectionInstance.connection.host}`)
        
     } catch (error) {

        console.log(`database connection failed ${error}`);

        process.exit(1);
     }
    

}

export default connectDB;

