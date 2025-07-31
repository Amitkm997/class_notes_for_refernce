import User from "../models/userSchema.js"

export const createUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body
        if(!name) return res.status(400).send({message:"please provide name"})
            if(!email) return res.status(400).send({message:"please provide email"})
                if(!password) return res.status(400).send({message:"please provide password"})
        let newUser=await User.create({name,email,password});
        res.status(201).send({message:"user created successfully",newUser:newUser})
    }catch(err){
        console.log(err)
    }

}