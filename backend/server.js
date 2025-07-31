import express from 'express';
import morgan from 'morgan';
import userRoute from './routes/userRoute.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const app=express();// initizilise the express
const PORT=process.env.PORT;

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("mongodb connected successfully"))
.catch((err)=>console.log(err))

app.use('/',userRoute)

app.listen(PORT,()=>{
     console.log(`server running on port ${PORT}`)
})

//bcrypt
// jwt-json web token 
//authentication / authorization