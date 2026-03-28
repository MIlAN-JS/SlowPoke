import jwt from "jsonwebtoken"
import redis from "../config/redis.js"


const checkUser = async(req ,res ,next)=>{
     try {
        const token = req.cookies.token
        if(!token){
            const error = new Error("Missing token")
            error.status = 400
            throw error
            return;
        } 

        // check if token is blacklisted

        const isToken = await redis.get("userToken")
        if(isToken){
         return res.status(401).json({
            success:false, 
            message : "unauthorized access"
         })
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        
        req.userId = decoded.id
        
        next()
        
     } catch (error) {
        console.log(error , "error bro error")
        next(error)
        
     }
}

export {checkUser}