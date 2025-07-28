import express from 'express';
import morgan from 'morgan';

const app=express();// initizilise the express
const PORT=5000;

app.use(express.json())
app.use(morgan('dev'))

app.use((req,res,next)=>{
    let time=new Date()
    console.log(time.toLocaleTimeString())
    next()
})

app.get('/',(req,res)=>{
    console.log(req.body)
    const{name}=req.body;
    if(!name) return res.send("please provide name")
    res.send(req.body)
})

app.get('/about',(req,res)=>{
    res.send("this is about us page")
})
app.listen(PORT,()=>{
     console.log(`server running on port ${PORT}`)
})