import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import connectDB from './database/conn.js'
import route from './route/authRoute.js';
import jobRoute from './route/jobRoute.js'
import errorMiddleware from './middleware/errorMiddleware.js';

//const express=require('express')
const app=express()

dotenv.config()
app.use(express.json())
//app.use(cors())
app.use("/api",route)
app.use("/api",jobRoute)
app.use(errorMiddleware)

connectDB()



const PORT=process.env.PORT || 3000

// connectDB.then(()=>{
app.listen(PORT,()=>{
    console.log(`listening to the ${PORT}`)
})
// }).catch(error =>{
//     throw new error
// })
