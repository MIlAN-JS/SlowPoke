import dotenv from "dotenv"
dotenv.config()
import userModel from "../models/user.model.js";
import sendEmail from "../services/email.service.js";
import jwt from "jsonwebtoken";
import redis from "../config/redis.js";

const registerUserController = async (req, res, next) => {

    try {
        const { userName, email, password } = req.body;
        const existingUser = await userModel.findOne({email});

        if(existingUser){
            const error = new Error("User already exists with this email");
            error.statusCode = 400;
            throw error;    
            return;
        }

         const newUser = await userModel.create({userName, email, password});

            // link send to email for verification

            const token = jwt.sign({email : email}, process.env.JWT_SECRET);
           await sendEmail({
                to : email, 
                subject : "Verify your email for SlowPoke",
                html : `<p>HI ${userName},
                <a href= "http://localhost:3000/api/auth/verify-email?token=${token}"><button>Verify your emailm</button></a>
                </p>
                <p>Thank you !!</p>
                
                `
            })





        res.status(201).json({
            success : true,
            message : "User registered successfully",
            user : newUser
        });
        
    } catch (error) {
        next(error);
    }

}

const verifyEmailController = async(req , res , next)=>{
    try {
        const token = req.query.token
        console.log(token , "token")

        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        const {email} = decoded;
        
        const user = await userModel.findOne({email});
        if(!user){
            const error = new Error("Invalid token or user doesnt exist");
            error.statusCode = 400;
            throw error;
            return 
        }

        user.verified = true;
        await user.save();

        res.send("<h1>Email verified successfully. You can now login to your account.</h1>");

        
    } catch (error) {
        console.log("error verification", error)
        next(error)
        
        
    }
}

const loginController = async(req , res ,next)=>{

    const {email , password} = req.body


    try {

        const user = await userModel.findOne({email}).select("+password ")

        if(!user){
            const error = new Error("Cannot find user")
            error.status = 400
            throw error
            return 
        }

        const isPassTrue = await user.checkPassword(password)

        if(!isPassTrue){

            const error = new Error("Invalid password")
            error.status = 400
            throw error

        }

        const token = jwt.sign({
            id : user._id 
        } , process.env.JWT_SECRET , {expiresIn : '1d'})

        res.cookie("token", token)

        res.status(200).json({
            message : "login success", 
            user : user, 
            success : true
        })

        
        
        
    } catch (error) {
console.log(error)
        next(error)
        
    }

}

const getUserController = async(req ,res , next)=>{
    try {

        const userId = req.userId

        const user = await userModel.findById(userId)

        if(!user){
           return  res.status(400).json({
                message : "user not found",
                success : false
            })
        }
        
        res.status(200).json({

            message : "user found", 
            user

        })

    } catch (error) {
        console.log("error", error)
        next(error)
        
    }
}

const logoutController = async(req , res ,next)=>{
    try {
        
        const userId = req.userId

        // check if user exist 
        const user = await userModel.findById(userId)
        if(!user){
            return res.status(400).json({
                message : "Cannot find user", 
                success : false
            })
        }

        // fetch the token 

        const token = req.cookies.token

        // blacklisting the token :} STORING TOKEN IN REDDIS DATABASE

        await redis.set("userToken" , token, "EX"  , 60*60)

        // deleting token from frontend

        res.clearCookie("token")


        res.status(200).json({
            message : "logout success", 
            success : true
        })
        


    } catch (error) {
         console.log(error , "logout error ")
        next(error)
       
        
    }
}


const GoogleOauthController = async(req ,res)=>{
    try {
        
        const token = jwt.sign({id : req.user.id}, process.env.JWT_SECRET)
       
        res.cookie("token", token)
        res.status(201).json({
            user : req.user
        })
        

    

    } catch (error) {
        
        console.log('cannot login withgoogle ', error )
    }
}

export { registerUserController, verifyEmailController , loginController, getUserController , logoutController , GoogleOauthController };