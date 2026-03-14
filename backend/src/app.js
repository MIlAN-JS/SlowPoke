import express from "express"
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";

const app = express(); 

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// routes
app.use("/api/auth", authRouter)






app.use(errorHandler)
export default app