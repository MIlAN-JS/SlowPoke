import express from "express"
import { checkUser } from "../middlewares/auth.middleware.js";
import multer from "multer";

import { createPostController, likePostController } from "../controllers/post.controller.js";

const postRouter = express.Router();
const upload = multer({
    storage : multer.memoryStorage(), 
     limits: {
     fileSize: 2 * 1024 * 1024 
  }})


postRouter.post("/create", checkUser,upload.single("postImg"),  createPostController);
postRouter.post("/like:postId", checkUser, likePostController )

export default postRouter;