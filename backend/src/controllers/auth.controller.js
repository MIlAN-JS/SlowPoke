import userModel from "../models/user.model.js";
import sendEmail from "../services/email.service.js";
import jwt from "jsonwebtoken";


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


export { registerUserController, verifyEmailController };