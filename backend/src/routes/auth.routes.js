import express from 'express';
const authRouter = express.Router();
import {  loginController, registerUserController, verifyEmailController } from '../controllers/auth.controller.js';
import {registerValidator ,loginValidator} from '../validators/auth.validator..js';

authRouter.post("/register", registerValidator,  registerUserController );
authRouter.get("/verify-email", verifyEmailController)
authRouter.post("/login",loginValidator, loginController )

export default authRouter;