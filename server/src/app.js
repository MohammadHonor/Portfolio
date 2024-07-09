import express from 'express'
import connectDB from './db.connection.js';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser'
import { Contact } from './contact.model.js';
dotenv.config({
    path:'./.env'
})

const app=express();
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))
app.use(bodyParser.json())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
connectDB()
.then(()=>{
    try {
        app.listen(process.env.PORT);
        
    } catch (error) {

        console.log("mongodb connection failed")
        
    }
})

app.get("/",(req,res)=>{

    res.download("./public/temp/Resume.pdf");

})

app.post('/contact',async(req,res)=>{
   const {name,email,massage}=req.body;
   const contactInstance= await Contact.create({
    name,
    email,
    massage
   });
   res.send("you massage successfully recieved")
})