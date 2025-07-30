

import express from "express";
import { getUser } from "../controllers/userController.js";
const router=express.Router();


router.use((req,res,next)=>{
    let time=new Date()
    console.log(time.toLocaleTimeString())
    next()
})

//database 
const user=[
    {id:1,name:"amit",profession:"Trainer"},
    {id:2,name:"Naman",profession:"Trainer"},
    {id:3,name:"Shivam",profession:"Trainer"},
    {id:4,name:"jatin",profession:"Trainer"}
]

//to get data of all users
router.get('/user',getUser)

//to get data of a perticular user
router.get('/user/:id',(req,res)=>{
    let userId=req.params.id;
    let userDetail=user.filter((cur)=>cur.id==userId)
    res.send(userDetail)
})


//post a data in the user database
router.post('/user',(req,res)=>{
    let newUser={
        id: user.length+1 ,
        name:"Ritik",
        profession:"Student"
    }
    user.push(newUser);
    res.send(user)
})

//update a data of a user in the database
router.put('/user/:id',(req,res)=>{
    let userId=req.params.id;
    let {name,profession}=req.body
    let filteredUser=user.filter((cur)=>cur.id==userId)
    filteredUser[0].name=name;
    filteredUser[0].profession=profession;
    res.send(user)
})

//delete a user from a data
router.delete('/user/:id',(req,res)=>{
    let userId=req.params.id;
    let newUsers=user.filter((cur)=>cur.id!=userId)
    res.send(newUsers)
})

export default router;