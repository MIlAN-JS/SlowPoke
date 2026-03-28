import express from 'express';
const authRouter = express.Router();
import {  getUserController, loginController, logoutController, registerUserController, verifyEmailController } from '../controllers/auth.controller.js';
import {registerValidator ,loginValidator} from '../validators/auth.validator..js';
import { checkUser } from '../middlewares/auth.middleware.js';
import passport from 'passport';
import jwt from "jsonwebtoken"

authRouter.post("/register", registerValidator,  registerUserController );
authRouter.get("/verify-email", verifyEmailController)
authRouter.post("/login",loginValidator, loginController )
authRouter.get("/getUser", checkUser , getUserController)
authRouter.post("/logout", checkUser , logoutController)


//outhRoute 
authRouter.get("/google" , 
passport.authenticate("google", {scope : ["openid", "profile","email"]})
)

authRouter.get("/google/callback", 

    passport.authenticate('google', {session : false}),
    (req , res)=>{
        
        const token = jwt.sign({id : req.user.id}, process.env.JWT_SECRET)
        console.log(token)
        res.cookie("token", token)
        res.send(req.user)
        

    }
)

export default authRouter;