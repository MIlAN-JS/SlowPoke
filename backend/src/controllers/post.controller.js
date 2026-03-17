import postModel from "../models/post.model.js";
import { uploadFile } from "../services/imagekit.service.js";



const createPostController = async(req , res , next)=>{ 
    try {
        const {caption } = req.body;
        const postImg = req.file;
        const {userId} = req;
        
    
        const response = await uploadFile(postImg)

        const newPost = await postModel.create({caption ,postImg: response.url , user : userId})


        res.status(200).json({
            message : "post created successfully", 
            newPost
        })
    } catch (error) {
        console.log("error", error)
        next(error)
    }
}



export { createPostController}