import mongoose from "mongoose";


const connectDB = async () => {
    try {

        const response = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connection success")
        
    } catch (error) {

        console.log(error, "Error connecting to the database");
        
    }
}

export default connectDB;