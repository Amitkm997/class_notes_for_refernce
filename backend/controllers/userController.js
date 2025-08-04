import User from "../models/userSchema.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name) return res.status(400).send({ message: "please provide name" })
        if (!email) return res.status(400).send({ message: "please provide email" })
        if (!password) return res.status(400).send({ message: "please provide password" })
         
        if(!emailRegex.test(email)) return res.status(400).send({message:"invalid email"})
        if(!passwordRegex.test(password)) return res.status(400).send({message:"invalid Password"})

        let existUser=await User.findOne({email})
        if(existUser) return res.status(400).send({message:"user already exitst "});
        

        let hashedPassword=await bcrypt.hash(password,10);
        // console.log(hashedPassword)
        let newUser = await User.create({ name, email, password:hashedPassword });

        res.status(201).send({ message: "user created successfully", newUser: newUser })
        
    } catch (err) {
        console.log(err)
    }
}

export const signIn=async(req,res)=>{
    const{email,password}=req.body;
    if(!email) return res.status(400).send({message:"please provide email"});
    if(!password) return res.status(400).send({message:"please provide password"});

    let existUser=await User.findOne({email})

    if(!emailRegex.test(email)) return res.status(400).send({message:"invalid email"})
    if(!passwordRegex.test(password)) return res.status(400).send({message:"invalid Password"})

    console.log(existUser)
    if(!existUser) return res.status(404).send({message:"please register first"});
     
    await bcrypt.compare(password,existUser.password);
    let payload={
        userId:existUser._id,
        email:email
    }
    let token=await jwt.sign(payload,"This is my secret key");
    res.status(200).send({message:"token generated successfully",token:token})

}