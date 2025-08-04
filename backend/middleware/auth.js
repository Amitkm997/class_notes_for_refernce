
import jwt from 'jsonwebtoken'
export const authentication=async(req,res,next)=>{
    const token =req.headers.authorization;
    if(!token) return res.status(401).send({message:"Token not found"});

    try{
        const decodedToken= jwt.verify(token,"This is my secret key");
        if(!decodedToken) res.status(404).send({message:"invalid token"});
        // console.log(decodedToken)
        req.userId=decodedToken
        next()
    }catch(err){
        res.status(401).send({error:"Invalid user"})
    }
}