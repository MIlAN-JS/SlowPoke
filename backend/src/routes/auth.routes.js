import express from 'express';
const authRouter = express.Router();
import {  registerUserController, verifyEmailController } from '../controllers/auth.controller.js';
import registerValidator from '../validators/auth.validator..js';

authRouter.post("/register", registerValidator,  registerUserController );
authRouter.get("/verify-email", verifyEmailController)

export default authRouter;