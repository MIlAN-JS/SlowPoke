import likeModel from "../models/like.model.js";
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

const likePostController = async(req , res , next)=>{
    try {

        const postId = req.params.postId
        const userId = req.userId

        const post = await postModel.findById(postId)
      
        if(!post){
            const error = new Error("Post not found")
            error.status = 404
            throw error
        }

        const alreadyLiked = await likeModel.findOne({post : postId , user : userId})
        if(alreadyLiked){
            const error = new Error("Post already liked")
            error.status = 400
            throw error
        }

        const response = await likeModel.create({post: postId ,user : userId})

        res.status(200).json({
            message : "post liked successfully", 
            response
        })
        
    } catch (error) {
        next(error)
    }
}



export { createPostController , likePostController}