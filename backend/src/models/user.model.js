import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    userName : {
        type : String, 
        required : [true , "username required"]
    },
    email : {
        type : String, 
        required : [true , "email required"]
    },
    password : {
        type : String, 
        required : [true , "password required"]
    },
    avatar : {
        type : String, 
        default : ""
    }, 
    bio : {
        type:String, 
        default : ""
    }, 
    coverImg : {
        type: String, 
        default: ""
    }

}, {timestamps : true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return ; 
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const userModel = mongoose.model("user", userSchema);

export default userModel;
