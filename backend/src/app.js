import express from "express"
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors"
import postRouter from "./routes/post.routes.js";
import passport from "./services/Oauth.service.js";

const app = express(); 

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use(cors({
    origin : "http://localhost:5173", 
    credentials : true
    
}))

// routes
app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)






app.use(errorHandler)
export default app