import express from 'express';
import morgan from 'morgan';
import userRoute from './routes/userRoute.js'
import mongoose from 'mongoose';
const app=express();// initizilise the express
const PORT=5000;

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://amitkm997:oDckR5MO7bSWa0jR@cluster0.t96wgc7.mongodb.net/')
.then(()=>console.log("mongodb connected successfully"))
.catch((err)=>console.log(err))

app.use('/',userRoute)

app.listen(PORT,()=>{
     console.log(`server running on port ${PORT}`)
})

//oDckR5MO7bSWa0jR 
// amitkm997
// mongodb+srv://amitkm997:oDckR5MO7bSWa0jR@cluster0.t96wgc7.mongodb.net/