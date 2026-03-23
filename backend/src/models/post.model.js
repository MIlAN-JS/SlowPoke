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


postSchema.virtual("totalLikes",    {
   ref : "like", 
   localField : "_id", 
   foreignField : "post", 
   count :  true
})




const postModel = mongoose.model("post", postSchema);

export default postModel;


