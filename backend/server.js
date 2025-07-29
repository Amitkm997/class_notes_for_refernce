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

//database 
const user=[
    {id:1,name:"amit",profession:"Trainer"},
    {id:2,name:"Naman",profession:"Trainer"},
    {id:3,name:"Shivam",profession:"Trainer"},
    {id:4,name:"jatin",profession:"Trainer"}
]

//to get data of all users
app.get('/user',(req,res)=>{
    res.send(user)
})

//to get data of a perticular user
app.get('/user/:id',(req,res)=>{
    let userId=req.params.id;
    let userDetail=user.filter((cur)=>cur.id==userId)
    res.send(userDetail)
})

//post a data in the user database
app.post('/user',(req,res)=>{
    let newUser={
        id: user.length+1 ,
        name:"Ritik",
        profession:"Student"
    }
    user.push(newUser);
    res.send(user)
})

//update a data of a user in the database
app.put('/user/:id',(req,res)=>{
    let userId=req.params.id;
    let {name,profession}=req.body
    let filteredUser=user.filter((cur)=>cur.id==userId)
    filteredUser[0].name=name;
    filteredUser[0].profession=profession;
    res.send(user)
})

//delete a user from a data
app.delete('/user/:id',(req,res)=>{
    let userId=req.params.id;
    let newUsers=user.filter((cur)=>cur.id!=userId)
    res.send(newUsers)
})
app.listen(PORT,()=>{
     console.log(`server running on port ${PORT}`)
})