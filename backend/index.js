// const express=require("express")
// const dotenv=require('dotenv')

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"

const app=express()
app.use(cors())
app.use(express.json())
dotenv.config()


const PORT= process.env.PORT||8000
const mongo_location=process.env.mongodb_data


//connect to mongodb
try {
 mongoose.connect(mongo_location)
 console.log("mongodb connect");
 
 
} catch (error) {
 console.log(`ther is some error ${error}`);
 
}

//definig routes

app.use("/book",bookRoute)
app.use("/user",userRoute)



app.listen(PORT,()=>{
 console.log(`done in porn no ${PORT}`);
 
})