import express from 'express';
const authRouter = express.Router();
import {  getUserController, loginController, registerUserController, verifyEmailController } from '../controllers/auth.controller.js';
import {registerValidator ,loginValidator} from '../validators/auth.validator..js';
import { checkUser } from '../middlewares/auth.middleware.js';

authRouter.post("/register", registerValidator,  registerUserController );
authRouter.get("/verify-email", verifyEmailController)
authRouter.post("/login",loginValidator, loginController )
authRouter.get("/getUser", checkUser , getUserController)

export default authRouter;