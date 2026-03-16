import jwt from "jsonwebtoken"


const checkUser = async(req ,res ,next)=>{
     try {
        const token = req.cookies.token
        if(!token){
            const error = new Error("Missing token")
            error.status = 400
            throw error
        } 
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        
        req.userId = decoded.id
        
        next()
        
     } catch (error) {
        console.log(error , "")
        next(error)
        
     }
}

export {checkUser}