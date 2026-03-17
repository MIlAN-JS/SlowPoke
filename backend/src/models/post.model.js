import mongoose from "mongoose";


const postSchema = new mongoose.Schema({

   caption : {
    type: String,
    required: true,
    default : ""
   }, 
   postImg : {
      type: String, 
      default : "",
   },
   user : {
      type : mongoose.Schema.Types.ObjectId, 
      ref : "user", 
      required : true
   }

}, {timestamps : true })



const postModel = mongoose.model("post", postSchema);

export default postModel;


