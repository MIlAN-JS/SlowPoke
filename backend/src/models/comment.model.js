import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
      comment : {
        type : String, 
        required : true
      } , 
      post : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "post"
      }, 
      user : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "post"
      }, 
     
}, {timestamps: true})



commentSchema.index({post: 1 , user : 1})

const commentModel = mongoose.model("comment", commentSchema);

export default commentModel

